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
    pub amount : String,
    pub title : String,
    pub description : String,
    pub isResolved : bool,
}