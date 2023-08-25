const UserModel = require("./../models/user_model");
const bcrypt = require('bcrypt');

const UserController = {

    createAccount: async function(req,res){
        try{
            const userData = req.body;
            const newUser = new UserModel(userData);
            await newUser.save();
            return  res.json({success: true, data: newUser, message: "User created!"});
        }
    catch(ex){
        return res.json({success: false, message : ex });
    }
},

  sighIn : async function(req,res){
    try{
        const {email, password} = req.body;

        const foundUser = await UserModel.findOne({email:email});
        if(!foundUser){
            return res.json({success: false, message : "User not found" });
        }

       const passwordMatch = bcrypt.compareSync(password,foundUser.password);
       if(!passwordMatch){
        return res.json({success : false, message: "Incorrect password"});
       }
       return res.json({success:true , data:foundUser});
    }
    catch(ex){
        return res.json({success: false, message : ex });
    }
  },
  updateUser: async function(req, res) {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: userId },
            updateData,
            { new: true }
        );

        if(!updatedUser) {
            throw "user not found!";
        }

        return res.json({ success: true, data: updatedUser, message: "User updated!" });
    }
    catch(ex) {
        return res.json({ success: false, message: ex });
    }
},

updateProfileUser: async function(req, res) {
    try {
        const {userId, profilePicture} = req.body;


        if (!profilePicture) {
            return res.json({ error: 'profilePicture is required' });
          }

        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: userId },
            {
                profilePicture: profilePicture
            },
            { new: true }
        );

        return res.json({ success: true, data: updatedUser, message: "User profile pic updated!" });
    }
    catch(ex) {
        return res.json({ success: false, message: "User not found" });
    }
}

};

module.exports = UserController;