module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);
    return ({
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            !api.env('production') && 'react-refresh/babel',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            [
                'import',
                {
                    libraryName: 'antd',
                    style: 'css'
                },
                'antd'
            ]
        ].filter(Boolean),
    })
}