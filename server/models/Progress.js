

const ProgressSchema = new mongoose.Schema({
    score: Number,
    badges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Badges",
      },
    ],
    health: Number,
    streak: Number,
  });