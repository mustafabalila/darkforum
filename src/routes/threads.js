const { Router } = require('express');
const passport = require('passport');
const {
  createThread,
  findAllThreads,
  findThread,
  getPosts,
  deleteThread,
} = require('../controllers/thread');

const router = Router();

router
  .route('/')
  .get(findAllThreads)
  .post(passport.authenticate('jwt', { session: false }), createThread);

router
  .route('/:id')
  .get(findThread)
  .delete(passport.authenticate('jwt', { session: false }), deleteThread);

router.get('/:threadId/posts', getPosts);

module.exports = router;
