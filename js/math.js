class Vec2{constructor(a,b){void 0===a?(this.x=0,this.y=0):void 0===b?(this.x=a,this.y=a):(this.x=a,this.y=b)}lengthSqr(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(lengthSqr())}normalize(){var a=this.lengthSqr();return a>0&&this.divide(Math.sqrt(a)),this}set(a,b){return a instanceof Vec2?(this.x=a.x,this.y=a.y):void 0===b?(this.x=a,this.y=a):(this.x=a,this.y=b),this}add(a,b){return a instanceof Vec2?(this.x+=a.x,this.y+=a.y):void 0===b?(this.x+=a,this.y+=a):(this.x+=a,this.y+=b),this}subtract(a,b){return a instanceof Vec2?(this.x-=a.x,this.y-=a.y):void 0===b?(this.x-=a,this.y-=a):(this.x-=a,this.y-=b),this}divide(a,b){return a instanceof Vec2?(this.x/=a.x,this.y/=a.y):void 0===b?(this.x/=a,this.y/=a):(this.x/=a,this.y/=b),this}multiply(a,b){return a instanceof Vec2?(this.x*=a.x,this.y*=a.y):void 0===b?(this.x*=a,this.y*=a):(this.x*=a,this.y*=b),this}}const BoundingBoxData={enterTime:new Vec2,exitTime:new Vec2};class BoundingBox{constructor(a,b){void 0==b&&(b=a,a=new Vec2),this.position=a,this.size=b}isInside(a,d){let b=0,c=0;return a instanceof Vec2?(b=a.x-this.position.x,c=a.y-this.position.y):(b=a-this.position.x,c=d-this.position.y),b>=0&&c>=0&&b<this.size.x&&c<this.size.y}collides(a){return this.position.x<a.position.x+a.size.x&&this.position.x+this.size.x>a.position.x&&this.position.y<a.position.y+a.size.y&&this.size.y+this.position.y>a.position.y}sweptCollision(a,b){let c=0,d=0;if(0==b.x){if(!(this.position.x<a.position.x+a.size.x)||!(a.position.x<this.position.x+this.size.x))return;BoundingBoxData.enterTime.x=-1e3,BoundingBoxData.exitTime.x=1e3}else c=b.x>0?a.position.x-(this.size.x+this.position.x):this.position.x-(a.size.x+a.position.x),d=b.x>0?a.size.x+a.position.x-this.position.x:this.size.x+this.position.x-a.position.x,BoundingBoxData.enterTime.x=c/Math.abs(b.x),BoundingBoxData.exitTime.x=d/Math.abs(b.x);if(0==b.y){if(!(this.position.y<a.position.y+a.size.y)||!(a.position.y<this.position.y+this.size.y))return;BoundingBoxData.enterTime.y=-1e3,BoundingBoxData.exitTime.y=1e3}else c=b.y>0?a.position.y-(this.size.y+this.position.y):this.position.y-(a.size.y+a.position.y),d=b.y>0?a.size.y+a.position.y-this.position.y:this.size.y+this.position.y-a.position.y,BoundingBoxData.enterTime.y=c/Math.abs(b.y),BoundingBoxData.exitTime.y=d/Math.abs(b.y);!(BoundingBoxData.enterTime.x>BoundingBoxData.exitTime.y)&&!(BoundingBoxData.enterTime.y>BoundingBoxData.exitTime.x)&&((c=Math.max(BoundingBoxData.enterTime.x,BoundingBoxData.enterTime.y))<0||c>1||(c==BoundingBoxData.enterTime.x?b.x=b.x*c:b.y=b.y*c))}}class List{constructor(){this.values=[],this.size=0}add(a){Array.isArray(a)&&a.forEach(a=>this.values[this.size++]=a),a instanceof List?a.forEach(a=>this.values[this.size++]=a):this.values[this.size++]=a}remove(b){if(Number.isInteger(b))this.values.splice(b,1),this.size--;else for(let a=0;a<this.size;a++)if(this.values[a]===b){this.values.splice(a,1),this.size--;return}}clear(){this.size=0}sort(a){this.values.length!=this.size&&(this.values.length=this.size),this.values.sort(a)}forEach(b){for(let a=0;a<this.size;a++)if(!0===b(this.values[a]))return}}const MathHelper={};MathHelper.neighbours8=[new Vec2(0,-1),new Vec2(1,-1),new Vec2(1,0),new Vec2(1,1),new Vec2(0,1),new Vec2(-1,1),new Vec2(-1,0),new Vec2(-1,-1)],MathHelper.neighbours4=[new Vec2(0,-1),new Vec2(1,0),new Vec2(0,1),new Vec2(-1,0)],MathHelper.lerp=function(a,b,c){return a+(b-a)*c},MathHelper.clamp=function(a,b,c){return a<b?b:a>c?c:a},MathHelper.randomCentered=function(){return 2*Math.random()-1},MathHelper.randomRange=function(a,b){return a+Math.random()*(b-a)},MathHelper.clampFloat=function(b,a){return Math.floor(b*a)/a},MathHelper.randomInt=function(a){return Math.floor(Math.random()*a)}