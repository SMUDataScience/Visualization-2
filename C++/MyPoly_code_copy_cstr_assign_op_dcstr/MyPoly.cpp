//
//  MyPoly.cpp
//  MyPolygon
//
//  Created by Ira on 4/5/16.
//
// covers rule of 3
// if you ever override the copy constructor, destructor or
// assignment operator, you must override all 3.
//
// only include is almost always the
// companion .h
#include "MyPoly.h"

MyPoly::MyPoly():
radius(1), pointCount(3){
    
    std::cout << "in MyPoly default cstr" << std::endl;
    _init();
}

MyPoly::MyPoly(float radius, int pointCount):
radius(radius), pointCount(pointCount) {
    // put any additional implementation details
    _init();
}

// copy cstr
MyPoly::MyPoly(const MyPoly& poly){
    // object still doesn't exist
    radius = poly.radius; // primitive copying, so no side-effect
    pointCount = poly.pointCount; // primitive copying, so no side-effect
   // vecs = poly.vecs; // huge problem 1 shared address, there is a side-effect
    vecs = new ofVec2f[poly.pointCount]; // new address, so no side-effect
    
    // to properly clone poly
    // copy data from old poly to new poly manually
    for(int i=0; i<poly.pointCount; ++i){
        vecs[i] = poly.vecs[i];
    }
}

// assignment operator
MyPoly& MyPoly::operator=(const MyPoly& poly){
    // avoid self assignment
    if(this != &poly){
        radius = poly.radius;
        pointCount = poly.pointCount;
        //vecs = poly.vecs; // huge problem
        
        // because the object already exists, I need to manually
        // clean up the memory and reallocate
        // based on length of poly.vecs;
        delete [] vecs;
        vecs = NULL; // or vecs = 0; to ensure pointer variable is reset.
        // reallocate based on lenght of poly.vecs
        vecs = new ofVec2f[poly.pointCount]; // new address, so no side-effect
        
        // to properly clone poly
        // copy data from old poly to new poly manually
        for(int i=0; i<poly.pointCount; ++i){
            vecs[i] = poly.vecs[i];
        }
    }
    
    // returns reference to current object
    return *this;
}



MyPoly::~MyPoly() {
    // must do this to avoid the leak
    // regardless if the polygon was created on the stack or heap
    delete [] vecs;
}

void MyPoly::_init(){
    // dynamically allocate memory on heap for vertex data
    // ******* must clean up
    vecs = new ofVec2f[pointCount];
    // local variable on the stack
    float theta = 0.0;
    for(int i=0; i<pointCount; ++i){
        vecs[i] = ofVec2f(cos(theta)*radius, sin(theta)*radius);
        theta += TWO_PI/pointCount;
    }

}


// declare methods/getters/setters
void MyPoly::draw() {
    ofSetColor(200, 100, 200);
    ofFill();
    ofBeginShape();
    for(int i=0; i<pointCount; ++i){
        ofVertex(vecs[i].x, vecs[i].y);
    }
    ofEndShape();
    
    
}
// pointer->field
// object.field
void MyPoly::setRadius(float radius) {
    this->radius = radius;
    //(*this).radius = radius;
}
float MyPoly::getRadius() const {
    return radius;
}

void MyPoly::setPointCount(int pointCount) {
    this->pointCount = pointCount;
}
int MyPoly::getPointCount() const {
    return pointCount;
}



















