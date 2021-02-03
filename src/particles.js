 const particlesOptions={

    particles: {
      number: {
      	value:200,
      	density:{
      		enable:true,
      		value_area:800,

       }
      },

      color:{
      value:"#FFD700" 
      },

      opacity:{
        value:0.8,
        randon:false,
        anim:{
        	enable:false,
        	speed:1,
        	opacity_min:0.1,
        	sync:false
             }
           },
      size:{
        value:2,
       	random:true,
       	anim:{
       	    enable:false,
            speed:30,
            size_min:0.1,
            sync:false
            }
           },
      line_linked:{
      	enable:false,
      	distance:150,
      	color:"#FFD700",
      	opacity:0.4,
      	width:1
      },
      move:{
      	enable:true,
      	speed:1,
      	direction: "bottom",	
      	random:false,
      	straight:false,
      	out_mode: "out",
      	attract:{
      		enable:false,
      		rotateX:600,
      		totateY:1200
      	}

      }
     }
    }


    export default particlesOptions;