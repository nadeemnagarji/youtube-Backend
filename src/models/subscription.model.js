import mongoose, { Schema, model } from "mongoose"



const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,  //one who is subscribing i,e name of subscriber
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,  //one to whom subscriber subscribes i.e. name of channel 
        ref:"User"
    }
},{timestamps: true})


export const subscription = mongoose.model("Subscription",subscriptionSchema)


/*
everytime a user subscribes any chanel this document is created i.e with the name of the subscriber and the channel to whom he has subsribed
for e.g say there is a user called nadeem and he subscribed to channedl a b and c  so it will create the 3 documents with above schema such that 
where the subscriber is nadeem and channel are a b and c

{s:nadeem ,c:a}
{s:nadeem ,c:b}
{s:nadeem ,c:c}
so as soon as we go the the page of that user i.e. nadeem and want to display the number of channels this user has subscribed we just get the documents with subscriber as nadeem i,e,
count of documents where = subscriber = nadeem

now lets say there are other users who have subscribed to naddeem which will create a document with subscribers as those users and channel as nadeem as follows
{s:rahul ,c:nadeem}
{s:rahul ,c:nadeem}
{s:rahul ,c:nadeem}
{s:rahul ,c:nadeem}

now on the user page of nadeem if we want to display the number of subscribers of nadeem we just get the documents where the channels have name as nadeem i,e,

4 so nadeem has 4 subscribers and 3 subscriptions 

*/