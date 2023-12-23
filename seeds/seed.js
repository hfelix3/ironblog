const sequelize = require('../config/connection');
const { User, IronBlog } = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const IronBlog of IronBlogData){
        await IronBlog.create({
            ...IronBlog,
            user_id: users[Math.floor(math.random() * users.length)].id,
        });
    }
    process.exit(0);
}
seedDatabase();