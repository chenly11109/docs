## embeddings
- 查找文本之间的相关性
- `Search` (where results are ranked by relevance to a query string)
- `Clustering` (where text strings are grouped by similarity)
....


https://www.sbert.net/index.html

- SentenceTransformers
### semantic search
- query
- entries
- 语义理解，同义词替换
- The idea behind semantic search is to embed all entries in your corpus（语料库）, whether they be sentences, paragraphs, or documents, into a vector space.
- corpus : large and structured collection of text for analysis, research and study - `尸体`
#### symmetric search / asymmetric - 两者用的模型不一样
- symmetric search: 同义词替换search, 在语义库中查找
- asymmetric semantic search 直接找答案
- cosin semilarity

#### CUDA
- NVIDIA - compute unified architecture platform
- parallel computing platform and api model to use GPU for general-purpose processing

### RAG - retrival augmented generation
#### retrieval system
<img src="https://raw.githubusercontent.com/UKPLab/sentence-transformers/master/docs/img/InformationRetrieval.png" />
Given a search query, we first use a retrieval system that retrieves a large list of e.g. 100 possible hits which are potentially relevant for the query. For the retrieval, we can use either lexical search, e.g. with ElasticSearch, or we can use dense retrieval with a bi-encoder.

However, the retrieval system might retrieve documents that are not that relevant for the search query. Hence, in a second stage, we use a re-ranker based on a cross-encoder that scores the relevancy of all candidates for the given search query.

`Elastic Search`
- ingest, analyze, search, visualize
https://www.elastic.co/elastic-stack/features

### prompting
- Fine-tuning
    -  training LLM further on a small dataset of your own