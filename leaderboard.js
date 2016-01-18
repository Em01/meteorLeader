PlayersList = new Meteor.Collection('players');

if(Meteor.isClient){
    Template.leaderboard.player = function(){
        return PlayersList.find();
    }
}

if(Meteor.isServer){
}
