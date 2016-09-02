var tree = [];

function setup() {
  createCanvas(400,400);
  var a = createVector( width/2, height);
  var b = createVector( width/2, height-100);
  var root = new Branch(a, b);
  tree[0] = root;
  
  var newBranch = root.branch();
  tree[1] = newBranch;
}

function draw() {
  background(51);  
  for(var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
}

function Branch(begin,end) {
  this.begin = begin;
  this.end = end;
  
  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  
  this.branch = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 4);
    var newEnd = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end, newEnd);
    return right;
  }
}