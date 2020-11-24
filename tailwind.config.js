module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: {
        enabled: true,
        content: ["./src/**/*.js"],
    },
    theme: {
        extend: {
            backgroundColor: {
                blue: {},
            },
        },
    },
    variants: {},
    plugins: [],
};
