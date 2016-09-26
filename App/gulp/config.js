module.exports = config = {
    SRC: 'src',

    dev: {
        DEST: 'build'
    },

    dist: {
        DEST: 'dist'
    },

    fileExtensions: {
        statics: ['html', 'css', 'json', 'js'],
        pug: ['pug'],
        images: ['png', 'gif', 'jpg', 'jpeg', 'svg'],
        sass: ['scss', 'sass'],
        typescript: ['ts'],
        inject: ['css', 'js']
    },

    buildSrcGlob: function (extensionType) {
        var extensions = this.fileExtensions[extensionType];

        //When the multiple items glob ('{}') contains a single item the glob breaks. Only add the braces
        // when there are multiple items.
        if (extensions.length === 1) {
            extensions = extensions[0];
        }
        else {
            extensions = '{' + extensions.join(',') + '}';
        }

        return config.SRC + '/**/*.' + extensions;
    },

    sass: {
        includePaths: [
            './',
            'src'
        ]
    },

    pug: {
        dev: {
            pretty: true,
            compileDebug: true
        },

        dist: {
            pretty: false,
            compileDebug: false
        }
    }

};