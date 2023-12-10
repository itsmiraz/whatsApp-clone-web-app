import getPrismaInstance from "../utils/PrismaClient.js";
import createError from "../utils/createError.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) return next(createError(400, "Email is Required"));

    const prisma = getPrismaInstance();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.send({
        message: "User Not Found",
        success: false,
      });
    } else {
      return res.send({
        message: "User Found",
        success: true,
        data: user,
      });
    }
  } catch (err) {
    next(err);
  }
};
