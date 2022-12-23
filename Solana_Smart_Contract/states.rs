use anchor_lang::prelude::*;

#[account]
#[derive(Default)]

pub struct UserProfile{
    pub authority : Pubkey, //32
    pub totalpost : u8, // 1
}

#[account]
#[derive(Default)]

pub struct CreateHelp{
    pub authority : Pubkey,
    pub amount : u8,
    pub title : String,
    pub message : String,
    pub name : String,
    pub img : String,
    pub isResolved : bool,
}