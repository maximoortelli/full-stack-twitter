import {initMongoose} from '@/lib/moongose';

export default async function handle(req, res) {
    await initMongoose();

    const id = req.query.id;
    const user = await User.findyById(id);
    res.json({user});
}
