var grunt = require("grunt");

grunt.config.init({
	uglify: {
	  my_target: {
	    files: {
	      'dest/output.min.js': ['public/src/mycode.js']
	    }
	  }
	},
	karma: {
	  unit: {
	    configFile : "public/karma.conf.js"
	  }
	}
	
});
grunt.registerTask("default","Default",function(){
	console.log("Default task");
});
grunt.registerTask("helloworld","Hello World",function(){
	console.log("Hello World");
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-karma');
grunt.registerTask("default",["karma","uglify"]);
grunt.registerTask("test",["karma"]);