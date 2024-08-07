import User from "../models/User.mjs";
import bcrypt from "bcrypt";

const saltRounds = 10;

const UserController = Object.create(Object.prototype);

UserController.new = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.senha, saltRounds);
    const created = await User.create({
        email: req.body.email,
        senha: hash
    });
    res.json({ "email": created.email });
};

UserController.login = async (req, res) => {
    const v = await User.findOne({
        where: { email: req.body.email }
    });
    if (v) {
        if (await bcrypt.compare(req.body.senha, v.senha)) {
            req.session.logged = true;
            req.session.email = v.email;
            res.json({ logged: req.session.logged });
        } else {
            res.json({ logged: false });
        }
    } else {
        res.json({ logged: false });
    }
};

UserController.logout = async (req, res) => {
    req.session.logged = false;
    req.session.email = null;
    res.json({ logged: req.session.logged });
};

UserController.logged = async (req, res) => {
    res.json({ logged: req.session.logged ? true : false });
};

export default UserController;