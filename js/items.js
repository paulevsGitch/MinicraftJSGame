class Item{constructor(a){this.image=a}render(a,b,c){a.drawImage(this.image,b,c)}}class ItemEntity extends MovableEntity{constructor(a){super(),this.item=a,this.maxAge=10,this.canPick=!1,this.age=0}tick(b,a){super.tick(b,a),this.age+=a,this.speed-=20*a,this.speed<0&&(this.speed=0),this.age>this.maxAge&&(this.alive=!1),this.canPick=this.age>.5}render(a){if(this.age>8){let c=.25*Math.cos((this.age-8)*10)+.75;Render.setAlpha(a,c)}let b=4*Math.sin(this.age)+4;if(this.age<.4){let d=MathHelper.clamp(this.age/.2-1,0,1),e=6*Math.cos(this.age/.4*Math.PI)+8;b=MathHelper.lerp(e,b,d)}this.item.render(a,16*this.position.x-8,16*this.position.y-8-b),Render.setAlpha(a,1)}drop(a,b){this.velocity.set(MathHelper.randomCentered(),MathHelper.randomCentered()).normalize(),this.speed=5,this.position.set(b),a.addEntity(this)}}const Items={};Items.treeLog=new Item(Images.load("img/items/tree_log.png")),Items.treeSapling=new Item(Images.load("img/items/tree_sapling.png"))