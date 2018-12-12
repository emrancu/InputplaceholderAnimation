

const placeHolderType={
  input:document.querySelector('input'),
  i:0,
  text:'', 
  pushRecursibly:function(){
  
		 let arr =this.text.split("");
     
		let currentTxt = this.input.getAttribute("placeholder"); 
    
		let placeholder = currentTxt + arr[this.i];
		let self=this;
	setTimeout(function(){
 
		self.input.setAttribute("placeholder", placeholder);
	 
		  self.i++;
 
		if (self.i < arr.length) {
			self.pushRecursibly(); 
		}
	 
	}, 100);
  
  },
  intervalInit:function(){
    let self=this;
    setInterval(function(){ 
      self.input.setAttribute('placeholder','');
      self.i=0;
      self.pushRecursibly();
      }, 4000);
    
  },
  init:function(txt){
    this.i=0;
    this.text=txt;
    this.input.setAttribute('placeholder',''); 
    this.pushRecursibly();
    this.intervalInit(); 
  }
};


placeHolderType.init("আমার সোনার বাংলা I Love You !");