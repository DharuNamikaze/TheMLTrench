// src/data/mlconcepts.js

export const mlConcepts = [
  // =================================================================
  // BASE LEVEL (0 - 2000m)
  // Fundamentals, Classical ML, Core Training Loop
  // =================================================================
  {
    id: 'regression',
    name: 'Regression',
    depth: 100,
    description: 'Predicting continuous values from input features.',
    category: 'fundamentals',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Regression_analysis'
  },
  {
    id: 'clustering',
    name: 'Clustering Mechanism',
    depth: 200,
    description: 'Grouping similar data points without labels (such as KNN, Fuzzy Clustering etc...)',
    category: 'unsupervised',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/machine-learning/clustering-in-machine-learning/'
  },
  {
    id: 'pca',
    name: 'Principal Component Analysis',
    depth: 300,
    description: 'Dimensionality reduction via orthogonal transformation',
    category: 'feature-engineering',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Principal_component_analysis'
  },
  {
    id: 'decision-trees',
    name: 'Decision Trees',
    depth: 400,
    description: 'Hierarchical decision rules for classification',
    category: 'classical-ml',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Decision_tree'
  },
  {
    id: 'random-forests',
    name: 'Random Forests',
    depth: 500,
    description: 'Ensemble bagging of decision trees',
    category: 'classical-ml',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Random_forest'
  },
  {
    id: 'mse',
    name: 'Mean Squared Error',
    depth: 600,
    description: 'L2 loss function for regression tasks',
    category: 'optimization',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Mean_squared_error'
  },
  {
    id: 'cross-entropy',
    name: 'Cross Entropy Loss',
    depth: 700,
    description: 'Measuring divergence between probability distributions, commonly used in Dense LLM training',
    category: 'optimization',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Cross-entropy'
  },
  {
    id: 'feature-norm',
    name: 'Feature Normalization',
    depth: 800,
    description: 'Scaling inputs to stabilize training',
    category: 'preprocessing',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/machine-learning/feature-engineering-scaling-normalization-and-standardization/'
  },
  {
    id: 'one-hot',
    name: 'One-hot Encoding',
    depth: 900,
    description: 'Representing categorical variables as binary vectors',
    category: 'preprocessing',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/machine-learning/ml-one-hot-encoding/'
  },
  {
    id: 'activation-funcs',
    name: 'Activation Functions',
    depth: 1000,
    description: 'Introducing non-linearity to neural networks',
    category: 'fundamentals',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Activation_function'
  },
  {
    id: 'optimizers',
    name: 'Optimizers',
    depth: 1100,
    description: 'updates model weights to improve accuracy and reduce error (such as Adam, SGD)',
    category: 'optimization',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/machine-learning/optimization-algorithms-in-machine-learning/'
  },
  {
    id: 'regularization',
    name: 'Regularization',
    depth: 1200,
    description: 'Techniques to prevent overfitting (L1, L2, Dropout)',
    category: 'training',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/machine-learning/regularization-in-machine-learning/'
  },
  {
    id: 'lr-schedulers',
    name: 'Learning Rate Schedulers',
    depth: 1300,
    description: 'Adjusting learning rate during training',
    category: 'training',
    size: 'medium',
    link: 'https://d2l.ai/chapter_optimization/lr-scheduler.html'
  },
  {
    id: 'gradient-clipping',
    name: 'Gradient Clipping',
    depth: 1400,
    description: 'Limiting gradient magnitude to prevent explosions',
    category: 'training',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/deep-learning/understanding-gradient-clipping/'
  },
  {
    id: 'class-imbalance',
    name: 'Class Imbalance Handling',
    depth: 1500,
    description: 'Techniques like SMOTE or weighted loss',
    category: 'preprocessing',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/machine-learning/handling-imbalanced-data-for-classification/'
  },
  {
    id: 'supervised',
    name: 'Supervised Learning',
    depth: 1600,
    description: 'Learning mapping from labeled data',
    category: 'paradigm',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Supervised_learning'
  },
  {
    id: 'unsupervised',
    name: 'Unsupervised Learning',
    depth: 1700,
    description: 'Finding patterns in unlabeled data',
    category: 'paradigm',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Unsupervised_learning'
  },
  {
    id: 'forward-noising',
    name: 'Forward Noising & Denoising',
    depth: 1800,
    description: 'Corrupting Image with gradual noising steps and restorating them to teach diffusion models how to generate images',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.21890'
  },
  {
    id: 'ddpm',
    name: 'DDPM Formulation',
    depth: 1900,
    description: 'Denoising Diffusion Probabilistic Models - type of models which works by learning to reverse a gradual corruption process,',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2006.11239'
  },

  // =================================================================
  // LEVEL 2 (2000 - 4000m)
  // Optimization Theory & Dynamics
  // =================================================================
  {
    id: 'sgd',
    name: 'Stochastic Gradient Descent',
    depth: 2100,
    description: 'Iterative optimization using mini-batches',
    category: 'optimization',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Stochastic_gradient_descent'
  },
  {
    id: 'nfl-theorem',
    name: 'The No Free Lunch Theorem',
    depth: 2200,
    description: 'No single algorithm works best for all problems. An algorithm\'s success is tied to the problem\'s specifics, meaning one that excels on one dataset will perform poorly on another, averaged across all possible problems',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/No_free_lunch_theorem'
  },
  {
    id: 'erm',
    name: 'Empirical Risk Minimization',
    depth: 2300,
    description: 'Minimizing error on the training set',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Empirical_risk_minimization'
  },
  {
    id: 'vc-dimension',
    name: 'Vapnik-Chervonenkis Dimension',
    depth: 2400,
    description: 'Measuring the capacity of a classification algorithm',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension'
  },
  {
    id: 'rademacher',
    name: 'Rademacher Complexity',
    depth: 2500,
    description: 'Measuring the richness of a class of functions',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Rademacher_complexity'
  },
  {
    id: 'double-descent',
    name: 'Double Descent',
    depth: 2600,
    description: 'Model\'s error rate on the test set initially decreases with the number of parameters, then peaks, then decreases again',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Double_descent'
  },
  {
    id: 'jacobian-hessian',
    name: 'Jacobian & Hessian Matrices',
    depth: 2700,
    description: 'First and second-order partial derivatives',
    category: 'math',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/engineering-mathematics/jacobian-and-hessian-matrices/'
  },
  {
    id: 'gradient-noise',
    name: 'Gradient Noise Scale',
    depth: 2800,
    description: 'predicts the largest batch size with minimal noise and data efficiency',
    category: 'training',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1812.06162'
  },
  {
    id: 'vanishing-gradients',
    name: 'Vanishing & Exploding Gradients',
    depth: 2900,
    description: 'Instability in deep network backpropagation where gradients values overflow or underflow',
    category: 'training',
    size: 'medium',
    link: 'https://www.cs.toronto.edu/~rgrosse/courses/csc321_2017/readings/L15%20Exploding%20and%20Vanishing%20Gradients.pdf'
  },
  {
    id: 'activation-saturation',
    name: 'Activation Saturation Effects',
    depth: 3000,
    description: 'Neurons getting stuck at asymptotic values',
    category: 'training',
    size: 'medium',
    link: 'https://www.researchgate.net/publication/301363359_Measuring_Saturation_in_Neural_Networks'
  },
  {
    id: 'convexity',
    name: 'Convexity & Smoothness',
    depth: 3100,
    description: 'Properties ensuring global minima (minimal loss) reachability',
    category: 'math',
    size: 'medium',
    link: 'https://deeplearning.cs.cmu.edu/F21/document/slides/lec6.pdf'
  },
  {
    id: 'tikhonov',
    name: 'Stability of Tikhonov Regularization',
    depth: 3200,
    description: 'L2 regularization for ill-posed problems (problems where a small change in input data causes a massive change in the output)',
    category: 'math',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Ridge_regression'
  },
  {
    id: 'pl-condition',
    name: 'Polyak–Łojasiewicz (PL) Condition',
    depth: 3300,
    description: 'Gradient dominance for faster convergence (ensures global linear convergence without requiring objective function to be convex)',
    category: 'theory',
    size: 'medium',
    link: 'https://www.emergentmind.com/topics/polyak-lojasiewicz-condition'
  },
  {
    id: 'saddle-points',
    name: 'Saddle Points vs Local Minima',
    depth: 3400,
    description: 'Why saddle points are the real problem in high-dim?',
    category: 'theory',
    size: 'medium',
    link: 'https://www.reddit.com/r/learnmachinelearning/comments/sv4673/can_saddle_points_provide_better_solutions_to/'
  },
  {
    id: 'ema',
    name: 'EMA of Weights',
    depth: 3500,
    description: 'Exponential Moving Average (technique where a mirror set of model parameters is maintained by keeping a running average of the training weights) for stable inference',
    category: 'training',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2411.18704'
  },
  {
    id: 'mixed-precision',
    name: 'Mixed Precision Diffusion Training',
    depth: 3600,
    description: 'FP16/FP32 hybrid for VRAM efficiency and faster inference in Diffusion Transformers',
    category: 'training',
    size: 'medium',
    link: 'https://docs.nvidia.com/deeplearning/performance/mixed-precision-training/index.html'
  },
  {
    id: 'noise-conditioning',
    name: 'Noise Level Conditioning',
    depth: 3750,
    description: 'Feeding the current noise magnitude into the neural network, to guide how much denoising is needed at each step',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2502.13129v1'
  },

  // =================================================================
  // LEVEL 3 (4000 - 6000m)
  // Deep Neural Networks & Architectures
  // =================================================================
  {
    id: 'lottery-ticket',
    name: 'Lottery Ticket Hypothesis',
    depth: 4100,
    description: 'Proposes that large, randomly initialized neural networks contain small subnetworks, called "winning tickets," that can achieve the same accuracy as the full network if trained in isolation with their original initializations',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1803.03635'
  },
  {
    id: 'fisher-info',
    name: 'Fisher Information Matrix',
    depth: 4250,
    description: 'used to calculate the covariance matrices associated with maximum-likelihood estimates.',
    category: 'math',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Fisher_information'
  },
  {
    id: 'ntk',
    name: 'Neural Tangent Kernel',
    depth: 4350,
    description: 'Infinite-width networks behave like linear models',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1806.07572'
  },
  {
    id: 'universal-approx',
    name: 'Universal Approximation Theorem',
    depth: 4500,
    description: 'NNs can approximate any continuous function',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Universal_approximation_theorem'
  },
  {
    id: 'mean-field',
    name: 'Mean-field theory of Neural Networks',
    depth: 4600,
    description: 'Statistical physics approach to large networks (Law of large numbers)',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1805.01053'
  },
  {
    id: 'ffnn',
    name: 'Feed Forward Neural Networks',
    depth: 4700,
    description: 'Type of NN in which information flows in a single direction, where inputs are multiplied by weights to obtain outputs',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Feedforward_neural_network'
  },
  {
    id: 'cnn',
    name: 'Convolutional Neural Networks',
    depth: 4800,
    description: 'Type of NN processes images by grids allowing spatial understanding',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Convolutional_neural_network'
  },
  {
    id: 'mem-gen-paradox',
    name: 'Memorization–Generalization Paradox',
    depth: 4950,
    description: 'Deep models memorize noise yet generalize well',
    category: 'theory',
    size: 'medium',
    link: 'https://proceedings.mlr.press/v70/arpit17a/arpit17a.pdf'
  },
  {
    id: 'n-gram',
    name: 'N-gram Models',
    depth: 5100,
    description: 'statistical language model that predicts the probability of a word (or symbol) based on the preceding n-1 words',
    category: 'nlp',
    size: 'medium',
    link: 'https://web.stanford.edu/~jurafsky/slp3/3.pdf'
  },
  {
    id: 'lstm-gru',
    name: 'LSTM & GRU Gating Mechanism',
    depth: 5200,
    description: 'Controlling information flow in sequences',
    category: 'architecture',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/deep-learning/rnn-vs-lstm-vs-gru-vs-transformers/'
  },
  {
    id: 'rnn',
    name: 'Recurrent Neural Networks',
    depth: 5350,
    description: 'Processing sequential data with internal state',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Recurrent_neural_network'
  },
  {
    id: 'latent-scaling',
    name: 'Latent Space Scaling',
    depth: 5500,
    description: ' The encodings of the autoencoder are scaled by this before feeding into the U-Net',
    category: 'training',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2507.16154'
  },
  {
    id: 'dnn',
    name: 'Deep Neural Networks',
    depth: 5650,
    description: 'Stacked layers for hierarchical feature learning',
    category: 'architecture',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/deep-learning/introduction-deep-learning/'
  },
  {
    id: 'high-dim-generalization',
    name: 'Generalization at Higher Dimensions',
    depth: 5800,
    description: 'large nets memorize, but still generalize at higher dimensions',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1611.03530'
  },

  // =================================================================
  // LEVEL 4 (6000 - 8000m)
  // Transformers & Attention Mechanisms
  // =================================================================
  {
    id: 'attention-kernel',
    name: 'Attention as Kernel Mechanism',
    depth: 6100,
    description: 'Smoothing via similarity kernels',
    category: 'attention',
    size: 'medium',
    link: 'https://jamesma.dev/2025/attention-and-kernel-smoothing/'
  },
  {
    id: 'dot-prod-geom',
    name: 'Dot Product Attention Geometry',
    depth: 6300,
    description: 'Cosine similarity in high-dimensional space',
    category: 'attention',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2407.18601'
  },
  {
    id: 'llm',
    name: 'Large Language Models',
    depth: 6400,
    description: 'Scaled up transformers on massive corpus',
    category: 'nlp',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Large_language_model'
  },
  {
    id: 'self-attention',
    name: 'Self Attention',
    depth: 6500,
    description: 'Sequence elements attending to themselves',
    category: 'attention',
    size: 'medium',
    link: 'https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html'
  },
  {
    id: 'cross-attention',
    name: 'Cross Attention',
    depth: 6600,
    description: 'Attending to context from encoder or other modality (such as image to text, text to image etc...)',
    category: 'attention',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2106.05786'
  },
  {
    id: 'attention-lora',
    name: 'Attention as LoRA',
    depth: 6200,
    description: 'Bring negative attention to self-attention modules and learn low-rank attention weights directly, capturing the characteristics of downstream tasks',
    category: 'optimization',
    size: 'medium',
    link: 'https://aclanthology.org/2025.findings-emnlp.676.pdf'
  },
  {
    id: 'encoder-decoder',
    name: 'Encoder-Decoder Architecture',
    depth: 6700,
    description: 'performs sequence-to-sequence tasks, using an encoder to read an input sequence and the decoder to generate output',
    category: 'architecture',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/nlp/encoder-decoder-models/'
  },
  {
    id: 'residual-highways',
    name: 'Residuals as Gradient Highways',
    depth: 6800,
    description: 'Skip connections prevents vanishing gradient problem',
    category: 'architecture',
    size: 'medium',
    link: 'https://svivek.com/teaching/lectures/slides/highway-residual/highway-resnet.pdf'
  },
  {
    id: 'pos-encoding',
    name: 'Positional Encoding',
    depth: 6900,
    description: 'Technique that adds information about the position of each token in the sequence to the input embeddings.Injecting order into permutation-invariant attention',
    category: 'attention',
    size: 'medium',
    link: 'https://www.geeksforgeeks.org/nlp/positional-encoding-in-transformers/'
  },
  {
    id: 'learned-pos',
    name: 'Learned Positional Embeddings',
    depth: 7000,
    description: 'Position information is encoded as a trainable parameter (embedding vector) rather than a fixed, predefined function',
    category: 'attention',
    size: 'medium',
    link: 'https://www.csie.ntu.edu.tw/~yvchen/doc/EMNLP20_PositionVec.pdf'
  },
  {
    id: 'transformer-expressivity',
    name: 'Transformer Expressivity',
    depth: 7100,
    description: 'Are Transformers really universal approximators?',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2402.15478'
  },
  {
    id: 'seq-approx',
    name: 'Universal Approximation of Sequences',
    depth: 7200,
    description: 'Transformers as universal sequence approximators',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1912.10077'
  },
  {
    id: 'inductive-bias',
    name: 'Inductive Bias of Self-Attention',
    depth: 7300,
    description: 'Relationships between tokens regardless of distance',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2110.10090'
  },
  {
    id: 'reparam-equiv',
    name: 'Reparameterization Equivalence',
    depth: 7400,
    description: 'Different architectures yielding same function space',
    category: 'theory',
    size: 'medium',
    link: 'https://sassafras13.github.io/ReparamTrick/'
  },
  {
    id: 'prob-flow-ode',
    name: 'Probability Flow ODE',
    depth: 7600,
    description: 'Deterministic sampling in diffusion models',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2305.11798'
  },

  // =================================================================
  // LEVEL 5 (8000 - 10000m)
  // Advanced Optimization & Systems
  // =================================================================
  {
    id: 'rope',
    name: 'RoPE',
    depth: 8100,
    description: 'Encodes the absolute position with a rotation matrix and provides relative position dependency in self-attention formulation',
    category: 'attention',
    size: 'medium',
    link: 'https://krasserm.github.io/2022/12/13/rotary-position-embedding/'
  },
  {
    id: 'byte-latent',
    name: 'Byte Pair Tokenizer',
    depth: 8200,
    description: 'Hybrid subword tokenization method that iteratively merges the most frequent pairs of adjacent characters or bytes into new, larger tokens',
    category: 'nlp',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Byte-pair_encoding'
  },
  {
    id: 'grokking',
    name: 'Transformer Grokking',
    depth: 8300,
    description: 'Delayed generalization after overfitting',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2201.02177'
  },
  {
    id: 'ilp',
    name: 'Instruction Level Parallelism',
    depth: 8400,
    description: 'Hardware execution of multiple instructions',
    category: 'systems',
    size: 'medium',
    link: 'https://www.nvidia.com/content/cudazone/cudau/courses/ucdavis/lectures/ilp1.pdf'
  },
  {
    id: 'length-gen',
    name: 'Length Generalization',
    depth: 8500,
    description: 'Extrapolating beyond training context window',
    category: 'nlp',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2207.04901'
  },
  {
    id: 'qkv-fusion',
    name: 'QKV Projection Fusion',
    depth: 8600,
    description: 'Merging Q,K,V matrix multiplications for speed',
    category: 'systems',
    size: 'medium',
    link: 'https://awsdocs-neuron.readthedocs-hosted.com/en/latest/nki/tutorials/fused-self-attn.html'
  },
  {
    id: 'flash-attn',
    name: 'Flash Attention',
    depth: 8700,
    description: 'IO-aware exact attention algorithm that uses tiling to reduce the number of memory reads/writes between HBM and GPU on-chip SRAM.',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2205.14135'
  },
  {
    id: 'kv-layout',
    name: 'KV Cache Layout',
    depth: 8800,
    description: 'Memory organization for fast decoding',
    category: 'systems',
    size: 'medium',
    link: 'https://huggingface.co/blog/not-lain/kv-caching'
  },
  {
    id: 'kernel-fusion-tech',
    name: 'Kernel Fusion Techniques',
    depth: 8900,
    description: 'Combining GPU kernels to reduce overhead',
    category: 'systems',
    size: 'medium',
    link: 'https://mboehm7.github.io/resources/ppopp2015.pdf'
  },
  {
    id: 'kernel-tiling',
    name: 'Kernel Tiling Strategies',
    depth: 9000,
    description: 'Optimizing data movement to shared memory',
    category: 'systems',
    size: 'medium',
    link: 'https://engineering.purdue.edu/~smidkiff/ece563/NVidiaGPUTeachingToolkit/Mod4/Lecture-4-4-tiled-matrix-multiplication-kernel.pdf'
  },
  {
    id: 'parallelism',
    name: 'Parallelism Strategies',
    depth: 9100,
    description: 'Data, Tensor, Pipeline, and Sequence parallelism for MultiGPU setups',
    category: 'systems',
    size: 'medium',
    link: 'https://huggingface.co/docs/transformers/en/perf_train_gpu_many'
  },
  {
    id: 'cuda-graph',
    name: 'CUDA Graph Captures',
    depth: 9200,
    description: 'Reducing CPU launch overhead for GPU kernels',
    category: 'systems',
    size: 'medium',
    link: 'https://developer.nvidia.com/blog/cuda-graphs/'
  },
  {
    id: 'block-sparse',
    name: 'Block-sparse Attention',
    depth: 9300,
    description: 'Skipping computation on empty attention blocks',
    category: 'efficiency',
    size: 'medium',
    link: 'https://guangxuanx.com/blog/block-sparse-attn-stats.html'
  },
  {
    id: 'ptx-optimization',
    name: 'PTX Control Optimization',
    depth: 9400,
    description: 'Low-level assembly tuning for GPUs',
    category: 'systems',
    size: 'medium',
    link: 'https://developer.nvidia.com/blog/advanced-nvidia-cuda-kernel-optimization-techniques-handwritten-ptx/'
  },
  {
    id: 'paged-attention',
    name: 'Paged Attention',
    depth: 9500,
    description: 'OS-style virtual memory for KV cache',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2309.06180'
  },
  {
    id: 'hardware-langs',
    name: 'Hardware Specific Languages',
    depth: 9550,
    description: 'generalized tiled programming model for more efficient AI Kernel programming',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2504.17577'
  },
  {
    id: 'flash-fnn',
    name: 'Flash Multi-head FNNs',
    depth: 9600,
    description: 'I/O-aware fused kernel computing outputs online in SRAM akin to FlashAttention, and a design using dynamically weighted parallel sub-networks to maintain a balanced ratio between intermediate and head dimensions',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2512.06989'
  },
  {
    id: 'gated-attn-sinks',
    name: 'Gated Attention Mechanism to escape Attention Sinks',
    depth: 9700,
    description: 'applying a head-specific sigmoid gate after the Scaled Dot-Product Attention consistently improves performance',
    category: 'attention',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2505.06708'
  },
  {
    id: 'grpo',
    name: 'GRPO for Math Performance in Dense LLMs',
    depth: 9800,
    description: 'How using GRPO + MoE aux loss enables math solving in LLMs?',
    category: 'rl',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2511.22570v1'
  },
  {
    id: 'cosine-schedule',
    name: 'Why Cosine Schedule Works Better',
    depth: 9850,
    description: 'Smooth decay matches loss landscape better',
    category: 'training',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2003.03977'
  },
  {
    id: 'fused-timestep',
    name: 'Fused Timestep Embedding Kernels',
    depth: 9900,
    description: 'Optimizing diffusion noise injection',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2212.09748'
  },
  {
    id: 'style-alignment',
    name: 'Style Alignment via SharedAttention',
    depth: 9950,
    description: 'Enable style alignment by leaking attention values',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2312.02133'
  },

  // =================================================================
  // LEVEL 6 (10000 - 12000m)
  // Scaling, Efficiency & Modern Architectures
  // =================================================================
  {
    id: 'scaling-laws',
    name: 'Optimal Scaling Laws',
    depth: 10100,
    description: 'Chinchilla: trade-off between params and data',
    category: 'scaling',
    size: 'medium',
    link: 'https://cameronrwolfe.substack.com/p/llm-scaling-laws'
  },
  {
    id: 'diffusion-lm',
    name: 'Diffusion Language Models',
    depth: 10200,
    description: 'Generating text via continuous diffusion',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2502.09992'
  },
  {
    id: 'test-time-scaling',
    name: 'Test Time Scaling',
    depth: 10300,
    description: 'Trading compute for accuracy during inference',
    category: 'inference',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2501.19393'
  },
  {
    id: 'free-transformers',
    name: 'Free Transformers',
    depth: 10400,
    description: 'Extension of the decoder Transformer that conditions its generative process on random latent variables which are learned without supervision using variational procedure',
    category: 'architecture',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.17558'
  },
  {
    id: 'moe',
    name: 'Mixture of Experts',
    depth: 10500,
    description: 'Sparse activation of model sub-components',
    category: 'architecture',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2507.11181'
  },
  {
    id: 'rlvr-rlhf',
    name: 'RLVR & RLHF',
    depth: 10600,
    description: 'Reinforcement Learning from Verified Rewards/Human Feedback',
    category: 'alignment',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2504.12501'
  },
  {
    id: 'sparse-load-balance',
    name: 'Sparse Expert Load Balancing',
    depth: 10700,
    description: 'load balancing loss that preserves token-wise relational structure, encouraging consistent expert choices for similar inputs during training',
    category: 'training',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.14038'
  },
  {
    id: 'ssm',
    name: 'State Space Models',
    depth: 10800,
    description: 'Mamba/S4: Linear time sequence modeling',
    category: 'architecture',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2312.00752'
  },
  {
    id: 'selective-scan',
    name: 'Selective Scan Kernels',
    depth: 10900,
    description: 'The parallel prefix sum algorithm for SSMs',
    category: 'systems',
    size: 'medium',
    link: 'https://www.maartengrootendorst.com/blog/mamba/'
  },
  {
    id: 'native-sparse',
    name: 'Native Sparse Attention',
    depth: 11000,
    description: 'Learning sparsity patterns directly for efficient long context modelling',
    category: 'attention',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2502.11089'
  },
  {
    id: 'compute-optimal',
    name: 'Compute-Optimal Context Length',
    depth: 11100,
    description: 'Balancing sequence length with model width',
    category: 'scaling',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2001.08361'
  },
  {
    id: 'fp16-bf16',
    name: 'FP16 vs BF16 in RL Stability',
    depth: 11200,
    description: 'Why FP16 is much stable for training LLMs with RL',
    category: 'training',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.26788'
  },
  {
    id: 'llm-injective',
    name: 'How LLMs are Injective & Invertible?',
    depth: 11300,
    description: 'non-linear activations and normalization are inherently non-injective, suggesting that different inputs could map to the same output and prevent exact recovery of the input from a model\'s representations',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.15511'
  },
  {
    id: 'attn-sinks-graph',
    name: 'Attention Sinks from Graph Perspective',
    depth: 11400,
    description: 'Token nodes acting as information absorbers',
    category: 'theory',
    size: 'medium',
    link: 'https://publish.obsidian.md/the-tensor-throne/Transformers+as+GNNs/Attention+sinks+from+the+graph+perspective'
  },
  {
    id: 'short-cot',
    name: 'Reasoning Stability in Short CoT',
    depth: 11500,
    description: 'Why Short CoT ensures stable reasoning in complex process?',
    category: 'reasoning',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.20512'
  },
  {
    id: 'squeezed-diffusion',
    name: 'Squeezed Diffusion Models',
    depth: 11600,
    description: 'quantum squeezed states redistribute uncertainty according to the Heisenberg uncertainty principle,which scale noise anisotropically along the principal component of the training distribution',
    category: 'generative', 
    size: 'medium',
    link: 'https://arxiv.org/pdf/2508.14871'
  },
  {
    id: 'terminal-flow',
    name: 'Terminal Velocity Matching',
    depth: 11700,
    description: 'generalization of flow matching that enables high-fidelity one- and few-step generative modeling',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2511.19797'
  },
  {
    id: 'mask-not',
    name: 'Why mask diffusion does not work',
    depth: 11700,
    description: 'why mask diffusion faces difficulties in achieving parallel generation and bidirectional attention?',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.03289'
  },
  {
    id: 'llms-memorize',
    name: 'How much do LLMs memorize ',
    depth: 11700,
    description: 'Estimating how much a model “knows” about a datapoint',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2505.24832'
  },
  {
    id: 'norm-free',
    name: 'Normalization Free Transformers',
    depth: 11800,
    description: 'Transformers without normalization can achieve the same or better performance using Dynamic Tanh (DyT)',
    category: 'architecture',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2503.10622'
  },
  {
    id: 'arc-agi',
    name: 'ARC is a Vision Problem',
    depth: 11900,
    description: 'Achieves higher accuracy in ARC by framing it as an image-to-image translation problem',
    category: 'reasoning',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2511.14761'
  },
  {
    id: 'depth-usage',
    name: 'How LLMs Use Their Depth?',
    depth: 11950,
    description: 'Explains how LLMs internally structure their computations to make predictions',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.18871'
  },
  {
    id: 'int8-sage',
    name: 'Why INT8 in SageAttention is Better?',
    depth: 11980,
    description: '8-Bit Attention for Plug-and-play Inference Acceleration',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2410.02367'
  },
  {
    id: 'sinhk-huawei',
    name: 'Sinkhorn-Normalized Quantization in LLMs',
    depth: 11980,
    description: 'Uses fast Sinkhorn–Knopp–style algorithm that finds scales to normalize per-row and per-column variances, thereby minimizing a novel per-matrix proxy target for quantization',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2509.22944'
  },


  // =================================================================
  // LEVEL 7 (12000 - 14000m)
  // Frontier Research & Theoretical Dynamics
  // =================================================================
  {
    id: 'large-concept',
    name: 'Large Concept Models',
    depth: 12100,
    description: 'Assume that a concept corresponds to a sentence, and use an existing sentence embedding space',
    category: 'frontier',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2412.08821'
  },
  {
    id: 'rectified-flow',
    name: 'Rectified Flow Transformers',
    depth: 12200,
    description: 'Uses rectified flow (connecting noise to data using straight-line trajectories) with a Transformer-based architecture',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.15742'
  },
  {
    id: 'not-all',
    name: 'Not all bits are equal',
    depth: 12200,
    description: 'Why models with an effective size below 8-bit 4B parameters achieve better accuracy by allocating memory to more weights rather than longer generation, while larger models achieve better accuracy by allocating memory to longer generations',
    category: 'generative',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.10964'
  },
  {
    id: 'mxfp4',
    name: 'MxFP4 vs NVFP4 Training',
    depth: 12300,
    description: 'Micro-exponent formats for extreme quantization and stability in LLM pre-training',
    category: 'hardware',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2502.20586'
  },
  {
    id: '1bit-scaling',
    name: '1-bit Transformer Scaling',
    depth: 12400,
    description: 'BitNet and the era of ternary weights',
    category: 'optimization',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2310.11453'
  },
  {
    id: 'mix-block-attn',
    name: 'Mixture Block Attention',
    depth: 12500,
    description: 'Applies the principles of MoE to the attention mechanism to transition between full and sparse attention',
    category: 'attention',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2502.13189'
  },
  {
    id: 'math-transformers',
    name: 'Why Transformers are Bad at Math?',
    depth: 12600,
    description: 'Why model converges to a local optimum that lacks the required long-range dependencies for multiplication?',
    category: 'weaknesses',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.00184v1'
  },
  {
    id: 'kimi-linear',
    name: 'Kimi Linear Attention & Hardware aware chunking',
    depth: 12700,
    description: 'Expressive linear attention module that extends Gated DeltaNet with a finer-grained gating mechanism',
    category: 'attention',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.26692'
  },
  {
    id: 'grad-low-rank',
    name: 'Gradient Low Rank Projection Optimizers',
    depth: 12800,
    description: 'Projecting gradients into lower rank to save memory',
    category: 'optimization',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2403.03507'
  },
  {
    id: 'decentralized-rl',
    name: 'Distributed LLM Training with DiLoCo',
    depth: 12900,
    description: 'Using DiLoCo to train LLMs in distributed poorly connected devices',
    category: 'distributed',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2412.01152'
  },
  {
    id: 'looped-transformers',
    name: 'Why Looped Transformers are good at algorithms?',
    depth: 13000,
    description: 'questions says everything',
    category: 'architecture',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2311.12424'
  },
  {
    id: 'pie',
    name: 'Positional Integrity Encoding for rapid KV cache edit',
    depth: 13100,
    description: 'Rapid KV cache editing technique for Large code LLMs',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2407.03157'
  },
  {
    id: 'continual-prob',
    name: 'The Continual Learning Problem',
    depth: 13200,
    description: 'Investigate whether sparse parameter updates can enable learning without catastrophic forgetting',
    category: 'learning',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.15103'
  },
  {
    id: 'spherical-graph',
    name: 'Spherical Equivariant Graph Transformers',
    depth: 13300,
    description: '3D molecule modeling with symmetry preservation',
    category: 'geometric-dl',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2512.13927'
  },
  {
    id: 'learned-score',
    name: 'Learned Score Field Geometry',
    depth: 13400,
    description: 'Diffusion models of data in general non-Euclidean geometries',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2305.15586'
  },
  {
    id: 'schrodinger',
    name: 'Schrödinger Bridge Interpretation',
    depth: 13500,
    description: 'Explains the issues with DSB in complex data generation',
    category: 'math',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2403.14623'
  },
  {
    id: 'diffusion-model-memorize',
    name: 'How diffusion models memorize?',
    depth: 13800,
    description: 'heading says all',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.10433'
  },
  {
    id: 'finite-bias',
    name: 'Bias from Finite Timesteps',
    depth: 13600,
    description: 'Observes that maximum likelihood training consistently improves the likelihood of score-based diffusion models across multiple datasets and architectures',
    category: 'math',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2101.09258'
  },
  {
    id: 'semantic-manifolds',
    name: 'Semantic Manifolds in Diffusion Trajectories',
    depth: 13700,
    description: 'how Riemannian geometry maps between the latent space and intermediate feature maps to show semantic axes and curved manifold structure in diffusion trajectories',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2302.12469'
  },
  {
    id: 'semantics-late',
    name: 'Why Semantics Appear Late?',
    depth: 13800,
    description: 'shows why semantic information transfer peaks at intermediate timesteps and vanishes near both the beginning and end of the process.',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.10433'
  },
  {
    id: 'bad-data-models',
    name: 'Bad data lead to Good Models',
    depth: 13800,
    description: ' explore the possibility that pre-training on more toxic data can lead to better control in post-training, ultimately decreasing a model’s output toxicity',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.10433'
  },

  // =================================================================
  // LEVEL 8 (14000 - 16000m+)
  // The Void: Deep Theory & Esoteric Concepts
  // =================================================================
  {
    id: 'topo-dl',
    name: 'Topological Deep Learning',
    depth: 14100,
    description: 'Deep learning to handle complex, non-Euclidean data structures',
    category: 'math',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2206.00606'
  },
  {
    id: 'infini-gram',
    name: 'Infini-gram',
    depth: 14250,
    description: ' engine that efficiently processes n-gram queries with unbounded n and trillion-token massive corpora',
    category: 'nlp',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2401.17377'
  },
  {
    id: 'xla-tech',
    name: 'XLA Compiler Techniques',
    depth: 14400,
    description: 'accelerating ML models with Linear Algebra & GPUs',
    category: 'compilers',
    size: 'medium',
    link: 'https://openxla.org/xla/tf2xla'
  },
  {
    id: 'manifold-learn',
    name: 'Manifold Learning',
    depth: 14550,
    description: 'Explains the set of methods to find the low dimensional structure of data',
    category: 'math',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2311.03757'
  },
  {
    id: 'weight-subspace',
    name: 'Universal Weight Subspace Hypothesis',
    depth: 14700,
    description: 'Do all models converge to the same-D subspace?',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2512.05117'
  },
  {
    id: 'holo-trans',
    name: 'Holographic Transformers',
    depth: 14850,
    description: 'Encoding sequences in complex associative memory using neuro-symbolic techniques',
    category: 'architecture',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2305.19534'
  },
  {
    id: 'gspo-rl',
    name: 'GSPO for RL Training in MoEs',
    depth: 15000,
    description: 'Stable RL training algorithms to train MoEs',
    category: 'rl',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2507.18071'
  },
  {
    id: 'seq-objective',
    name: 'Sequence Objective as First Order Approximation',
    depth: 15150,
    description: 'Explains under what conditions the true sequence-level reward can be optimized via a surrogate token-level objective in policy gradient methods',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2512.01374'
  },
  {
    id: 'brain-rot',
    name: 'LLMs Can Get Brain Rot',
    depth: 15300,
    description: 'Continual exposure to junk web text induces lasting cognitive decline in large language models',
    category: 'safety',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2510.13928'
  },
  {
    id: 'rep-geom',
    name: 'Representation Geometry Manifolds',
    depth: 15450,
    description: 'Treats the data space of diffusion models as a Riemannian manifold with a score-derived metri',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2504.20288'
  },
  {
    id: 'align-artifact',
    name: 'Alignment as an Optimization Artifact',
    depth: 15600,
    description: 'Is language objective just a local minimum?',
    category: 'safety',
    size: 'medium',
    link: 'https://arxiv.org/pdf/1806.08734'
  },
  {
    id: 'causal-emergence',
    name: 'Causal Emergence in Representations',
    depth: 15750,
    description: 'Shows how neural representations can align with high-level causal variables through causal abstraction experiments',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2106.02997'
  },
  {
    id: 'warp-div',
    name: 'Warp Divergence from Timesteps',
    depth: 15900,
    description: 'GPU thread inefficiency in conditional generation',
    category: 'systems',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2506.08337'
  },
  {
    id: 'cond-geo',
    name: 'Conditioning as Geometry Deformation',
    depth: 16050,
    description: 'Conditioning is done via projective/geometric transformations of the points and features',
    category: 'theory',
    size: 'medium',
    link: 'https://arxiv.org/pdf/2303.05916'
  },
  {
    id: 'riemann-opt',
    name: 'Riemann Optimization for variables on Curved Spaces',
    depth: 16200,
    description: 'Gradient descent on non-Euclidean manifolds',
    category: 'math',
    size: 'medium',
    link: 'https://www.cis.upenn.edu/~cis6100/Ring-Wirth-optim-Riemann.pdf'
  }
];

export const depthMarkers = Array.from({ length: 85 }, (_, i) => i * 200);

export const zones = [
  { name: 'Base: Fundamentals', start: 0, end: 2000, color: '#4fc3f7' },
  { name: 'Level 2: Dynamics', start: 2000, end: 4000, color: '#29b6f6' },
  { name: 'Level 3: Deep Nets', start: 4000, end: 6000, color: '#0288d1' },
  { name: 'Level 4: Transformers', start: 6000, end: 8000, color: '#01579b' },
  { name: 'Level 5: Systems', start: 8000, end: 10000, color: '#1a237e' },
  { name: 'Level 6: Scaling', start: 10000, end: 12000, color: '#311b92' },
  { name: 'Level 7: Frontier', start: 12000, end: 14000, color: '#000051' },
  { name: 'Level 8: The Void', start: 14000, end: 16500, color: '#000000' }
];