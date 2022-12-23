use anchor_lang::prelude::*;
pub mod states;
pub mod constant;
use crate::{constant::*, states::*};
declare_id!("6u1uWd6eydeXncFusdd1QCca6yKKu7teW3JJuXCJjMJT");

#[program]

pub mod solana_hackday {
    use super::*;
    pub fn intialize_user(ctx:Context<IntializeUser>) -> Result<()> {
        let user_profile = &mut ctx.accounts.user_profile;
        user_profile.authority = ctx.accounts.authority.key();
        user_profile.totalpost =  0;

        Ok(())
    }

    pub fn create_help(
        ctx: Context<CreatePost>,
        amount : u8 ,
        title : String,
        message : String,
        name : String,
        img : String, 
    ) -> Result<()>{
        let create_post = &mut ctx.accounts.create_post;
        let user_profile = &mut ctx.accounts.user_profile;
        create_post.authority = ctx.accounts.authority.key();
        create_post.amount = amount;
        create_post.title = title;
        create_post.message = message;
        create_post.name = name;
        create_post.img = img;
        create_post.isResolved = false;
        user_profile.totalpost = user_profile.totalpost
        .checked_add(1)
        .unwrap();

        Ok(())
    }

    pub fn update_help(
        ctx:Context<UpdateHelp>,
        amount : u8,
        title : String,
        message : String,
        name : String,
        img: String,
    ) -> Result<()>{
        let create_post = &mut ctx.accounts.create_post;

        create_post.amount = amount;
        create_post.title = title;
        create_post.message = message;
        create_post.name = name;
        create_post.img = img;

        Ok(())
        
    }
}

// create pda 

#[derive(Accounts)]

pub struct IntializeUser<'info>{
    #[account(mut)]
    pub authority : Signer<'info>,
    #[account(
        init,
        seeds = [USER_TAG , authority.key().as_ref()],
        bump,
        payer = authority,
        space = 32+1+8,
        
    )]
    pub user_profile  : Box<Account<'info , UserProfile>>,
    pub system_program : Program<'info , System >,
}

#[derive(Accounts)]
#[instruction()]

pub struct CreatePost<'info>{
    #[account(
        mut,
        seeds = [USER_TAG,authority.key().as_ref()],
        bump,
        has_one = authority
    )]

    pub user_profile : Box<Account<'info , UserProfile>>,

    #[account(
        init,
        seeds = [CREATE_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2865 + 8,
    )]

    pub create_post : Box<Account<'info , CreateHelp>>,

    #[account(mut)]
    pub authority : Signer<'info>,
    pub system_program : Program<'info , System>,
    
}

#[derive(Accounts)]
#[instruction()]

pub struct UpdateHelp<'info>{

    #[account(
        mut,
        seeds = [CREATE_TAG , authority.key().as_ref()],
        bump,
        has_one = authority,
    )]

    pub create_post : Box<Account<'info , CreateHelp>>,

    #[account(mut)]
    pub authority : Signer<'info>,
    pub system_program : Program<'info , System>,
}
