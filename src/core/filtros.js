const Business = require('../domain/model/businessDao');

let filterByUser = async (arrayTextLower) => {
    console.log('filterByUser');

    const respuesta = await Business.aggregate(
        [{
                $match: {
                    $or: [{
                            prendasGenerales: {
                                $in: arrayTextLower,
                            },
                        },
                        {
                            principalColors: {
                                $in: arrayTextLower,
                            },
                        },
                        {
                            features: {
                                $in: arrayTextLower,
                            },
                        },
                        {
                            prendasInferiores: {
                                $in: arrayTextLower,
                            },
                        },
                    ],
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'usuario',
                },
            },
        ],
    );

    console.log("FIKLTER:JS", respuesta.length)

    return respuesta
}

module.exports = {
    filterByUser
}