#pragma once

#include "ofMain.h"
#include "MyPoly.h"

class ofApp : public ofBaseApp{

	public:
    
        //~ofApp();
    
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
    // declaring an object
    // invoking the default cstr
    // in C++ declaring an object is
    // instantiation
    MyPoly p1;
    // cstr is not called for pointer declaration
    //MyPoly* p_ptr1;
		
};









