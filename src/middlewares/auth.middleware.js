import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandleer } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyJwt = asyncHandleer(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
//console.log(token,"exoirrey");
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //console.log(decodedToken);
    const user = decodedToken
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    console.log("hi");
    next();
  } catch (error) {
    throw new ApiError(401, "Unauthorized request");
  }
});
