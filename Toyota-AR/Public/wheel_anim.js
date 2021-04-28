// -----JS CODE-----

// @input float spinSpeed = 2.0
// @input float spinDegrees = 45.0

var DEG_TO_RAD = 0.0174533;
var spinTransform = script.getTransform();
var spinVal = Math.sin( getTime() * script.spinSpeed ) * ( script.spinDegrees * DEG_TO_RAD );

spinTransform.setLocalRotation( quat.quatFromEuler( 0.0, 0.0, spinVal ) );