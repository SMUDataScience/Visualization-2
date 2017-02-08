//
//  MyPoly.h
//  MyPolygon
//
//  Created by Ira on 4/5/16.
//
//

// generally bring in all your includes (dependencies)
// in the .h file
#ifndef __MyPolygon__MyPoly__
#define __MyPolygon__MyPoly__

#include <iostream>
#include "ofMain.h"


class MyPoly {
    
   // MyPoly& operator<<(std::ostream& out, const MyPoly& p);
    // default access is private if no access modifier is declared
    
    // generally fields are private
private:
    // we need to calculate
    // on polar graph
    // and map to Cartesian
    // using
    //x = cos(theta)
    //y = sin(theta)
    float radius;
    int pointCount;
    
    // implementation details
    ofVec2f* vecs;
    
    // this function is for implementation
    void _init();
    

// most methods and cstrs are public
public:
    // declare cstrs
    MyPoly();
    
    // overloaded cst
    MyPoly(float radius, int pointCount);
    
    // copy cstr
    MyPoly(const MyPoly& poly);
    
    // assignment operator
    MyPoly& operator=(const MyPoly& poly);
    
    // dstr
    ~MyPoly();
    
    // declare methods/getters/setters
    
    void draw();
    
    void setRadius(float radius);
    float getRadius() const;
    
    void setPointCount(int pointCount);
    int getPointCount() const;
    
    
};

#endif /* defined(__MyPolygon__MyPoly__) */








