const express = require("express");

const Yoga = require("../models/yoga");

const router = express.Router();

// router.get("yoga",(res,req,next) => {
//     Yoga.findById(req.params.id).then(user => {
//         if (user) {
//           res.status(200).json(user);
//         } else {
//           res.status(404).json({ message: "Post not found!" });
//         }
//     })
// })
router.get("", (req, res, next) => {
  Yoga.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      yoga: documents
    });
  });
});

// router.get("", (req, res, next) => {
//   const pageSize = +req.query.pageSize;
//   const currentPage = +req.query.page;
//   const postQuery = Post.find();
//   let fetchedPosts;
//   if (pageSize && currentPage) {
//     postQuery
//       .skip(pageSize * (currentPage - 1))
//       .limit(pageSize);
//   }
//   postQuery.then(documents => {
//     fetchedPosts = documents;
//     return Post.count();
//   }).then(count => {
//     res.status(200).json({
//       message: "Posts fetched successfully!",
//       posts: fetchedPosts,
//       maxPosts: count
//     });
//   });
// });

// router.get("/:id", (req, res, next) => {
//   Post.findById(req.params.id).then(post => {
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(404).json({ message: "Post not found!" });
//     }
//   });
// });



module.exports = router;
