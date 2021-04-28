// -----JS CODE-----

/**
var myAnimation = script.getSceneObject().getFirstComponent("Component.SpriteVisual");
var loops = 1;
var offset = 0.0;
myAnimation.getMaterial(0).getPass(0).baseTex.control.play(loops, offset);
**/

// @input SceneObject road2


var event = script.createEvent("BrowsRaisedEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
   script.road2.enabled = true;
});


var event = script.createEvent("BrowsLoweredEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
    script.road2.enabled = false;
});