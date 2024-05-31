import { Video } from "../models/video.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandleer } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllVdieos = asyncHandleer(async (req, res) => {
  console.log("HHii");
  const videos = await Video.find();

  res.status(200).json(new ApiResponse(200, videos, "all videos sent"));
});

export const uploadVideo = asyncHandleer(async (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  const { title, description, duration } = req.body;

  const videoFileLocalPath = req.files?.video[0]?.path;
  const Thumbnail = req.files?.thumbnail[0]?.path;
  console.log("VIDEO THUMBNAIL LOCAL PATHS::", videoFileLocalPath, Thumbnail);

  if (!videoFileLocalPath) {
    throw new ApiError(400, "Video file is required");
  }

  if (!Thumbnail) {
    throw new ApiError(400, "Thumbnail file is required");
  }

  const uploadedVideo = await uploadOnCloudinary(videoFileLocalPath);
  const thumbnail = await uploadOnCloudinary(Thumbnail);

  console.log("CLOUDINARY URLS::", uploadVideo, thumbnail);
  if (!uploadVideo) {
    throw new ApiError(400, "video file not uploaded in cloudinary");
  }
  if (!thumbnail) {
    throw new ApiError(400, "Thumbnial  not uploaded in cloudinary");
  }

  const video = await Video.create({
    videoFile: uploadedVideo.url,
    thumbnail: thumbnail.url,
    title,
    description,
    duration,
    owner: userId,
  });
  console.log("FINAL RESPONSE", video);
  return res
    .status(201)
    .json(new ApiResponse(200, video, "video uploaded succesfully"));
});
