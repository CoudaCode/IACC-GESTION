import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Image");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = path.extname(file.originalname);
    const r = (al) => (al.length == 2 ? al[1] : r);
    cb(
      null,
      Date.now() + r(Math.random().toString().split(".")) + uniqueSuffix
    );
  },
});
const upload = multer({
  storage : storage,
  fileFilter:function(req, file, cb) {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/svg" ||
        file.mimetype === "image/webp" ||
        file.mimetype === "image/gif" ||
        file.mimetype === "image/avif"
      ) {
        cb(null, true);
      } else {
        console.log("les extensions recommandées sont jpeg, png, jpg, webp, avif , gif, svg")
        cb(null, false);
      }
    }
});

export default upload;
