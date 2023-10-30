module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define(
        "role",
        {
            roleName: {
                type: Sequelize.STRING,
            },
        },
        {
            timestamps: false,
            tableName: "roles",
        }
    );

    role.associate = (models) => {
        role.hasMAny(models.user, { foreignKey: "roleId"});
    };

    return role;
}