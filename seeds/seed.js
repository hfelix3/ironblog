const sequelize = require('../config/connection');
const { User, ironblog } = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const irongblog of ironblogData){
        await ironblog.create({
            ...ironblog,
            user_id: users[Math.floor(math.random() * users.length)].id,
        });
    }
    process.exit(0);
}
seedDatabase();