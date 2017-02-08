#include "ofApp.h"

// called automatically when instance goes
// out of scope
//ofApp::~ofApp(){
//   // delete p_ptr1;
//}

//--------------------------------------------------------------
void ofApp::setup(){
    // if you don't see a delete for this,
    // you definitely have a leak
    
    // what is being called in the following statements?
    p1 = MyPoly(100, 6); // assignment operator called
    
//    MyPoly p2(p1); // copy constructor called
//    
//    MyPoly p3 = p2; // copy constructor called
    
}

//--------------------------------------------------------------
void ofApp::update(){
  
}

//--------------------------------------------------------------
void ofApp::draw(){
    // do drawing
    ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    ofRotate(ofGetFrameNum());
    //ofScale(100, 100);
    p1.draw();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
