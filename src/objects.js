/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  //return undefined; //Modify ONLY this line
  return {type: 'Goldfish',
    brand: 'Pepperidge Farm',
    flavor: 'Cheddar',
    count: 2000};
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
var MessageLog = function(user)
{
  this.user = user;
  var sentMessages = [];
  var sent;
  var received;
  var lastReceivedMsg;

  this.logMessage = function(messageText, direction) {
    switch (direction) {
	 case 0:
	   if (sentMessages.length >= 5) { sentMessages.pop(); }
	   sentMessages.unshift(messageText);
	   if (sent === undefined) { sent = 1; }
	   else { sent++; }
	   break;

	 case 1:
	   if (received === undefined) { received = 1; }
	   else { received++; }
	   this.lastReceivedMsg = messageText;
	   break;
    }
  };

  this.getSentMessage = function(n) {
    return sentMessages[n];
  };
  
  this.totalSent = function() {
    return sent;
  };
  
  this.totalReceived = function() {
    return received;
  };
};

//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function() {
  return this.lastReceivedMsg;
};
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog(BlackHatGuy);
BlackHatGuy.logMessage("foo",0);
BlackHatGuy.logMessage("bar",0);
BlackHatGuy.logMessage("baz",0);

//end your code
