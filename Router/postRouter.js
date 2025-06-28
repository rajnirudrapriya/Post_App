const { Router } = require('express');
const { createPost, allPosts, singlePost, updatePost, deletePost } = require('../controller/postController');
const router = Router();
const upload = require('../config/multer');
const { protect } = require('../config/protect')

router.post('/posts', upload.single('post'), createPost)  //to upload more than 1 files, we use upload.array()
router.get('/posts', protect, allPosts)
router.get('/posts/:id', protect, singlePost)
router.patch('/posts/:id', upload.single('post'), updatePost)
router.delete('/posts/:id', deletePost)

module.exports = router;