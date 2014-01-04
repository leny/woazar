"use strict"

module.exports = ( grunt ) ->

    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-nodeunit"
    grunt.loadNpmTasks "grunt-contrib-jshint"
    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-banner"

    grunt.initConfig
        coffee:
            lib:
                options:
                    bare: yes
                expand: yes
                cwd: "lib",
                src: [
                    "**/*.coffee.md"
                ]
                dest: "lib"
                ext: ".js"
        usebanner:
            nodeenv:
                options:
                    position: "top"
                    banner: "#!/usr/bin/env node"
                    linebreak: yes
                files:
                    src: [
                        "lib/woazar.js"
                    ]
        nodeunit:
            files: [
                "test/**/*_test.js"
            ]
        jshint:
            options:
                jshintrc: ".jshintrc"
            lib:
                src: [
                    "lib/**/*.js"
                ]
            test:
                src: [
                    "test/**/*.js"
                ]
        watch:
            lib:
                files: "<%= coffee.lib.src %>"
                tasks: [
                    "coffee"
                    "usebanner:nodeenv"
                    "jshint:lib"
                    # "nodeunit"
                ]
            test:
                files: "<%= jshint.test.src %>"
                tasks: [
                    "jshint:test"
                    # "nodeunit"
                ]

    grunt.registerTask "default", [
        "coffee"
        "usebanner:nodeenv"
        "jshint"
        "nodeunit"
    ]
