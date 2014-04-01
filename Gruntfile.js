module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		aws: grunt.file.readJSON('/Users/andreasstokholm/Dropbox/stokholm-io-blog-credentials.json'),
		jekyll: {
			doctor: true,
			serve: false
		},
		s3: {
		  options: {
			accessKeyId: "<%= aws.key %>",
			secretAccessKey: "<%= aws.secret %>",
			bucket: "<%= aws.bucket %>",
			region: "eu-west-1"
		  },
		  build: {
			cwd: "_site/",
			src: "**"
		  }
		}
	});

	// Load the plugin that provides the "uglify" task.
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	// grunt.registerTask('default', ['uglify']);
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-aws');
};

// module.exports = function(grunt) {
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),
//         uglify: {
//             options: {
//                 banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//             },
//             build: {
//                 src: 'Static/Scripts/application.js',
//                 dest: 'Static/Scripts/build/gogemba.min.js'
//             }
//         },
//         compass: {
//             dist: {
//                 options: {
//                     config: 'Static/Styles/config.rb',
//                     cssDir: 'Static/Styles'
//                 }
//             }
//         },
//         watch: {
//             css: {
//                 files: ['Static/Styles/sass/*.scss'],
//                 tasks: ['compass']
//             }
//				,
//				uglify: {
//					files: ['Static/Scripts/application.js'],
//					tasks: ['uglify']
//				}
//         },
//         phpunit: {
//             classes: {
//                 dir: 'tests/php/'
//             },
//             options: {
//                 bin: 'vendor/bin/phpunit',
//                 colors: true
//             }
//         }
//     });
//
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     grunt.loadNpmTasks('grunt-contrib-compass');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-phpunit');
//
//     grunt.registerTask('default', ['uglify', 'compass']);
//     grunt.registerTask('precommit', ['uglify', 'compass', 'phpunit']);
// };