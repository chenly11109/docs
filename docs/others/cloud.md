## Azure

#### blobServiceClient, containerClient, blockBlobClient
```typeScript
// 有多种方式生成实例 - SASToken 拼接等
  const blonServiceClient = new BlobServiceClient(SASToken);
  // 取得对应的桶（AWS 等为bucket的概念）
     const containerClient = blobServiceClient.getContainerClient(<container name>);
      const blockBlobClient = containerClient.getBlockBlobClient(<blob name>);
```
#### uploadData
```typeScript
   const uploadRes = await blockBlobClient.uploadData(<blob>, <blob options>);
```

#### stageBlock, commitBlockList
```typeScript
      const blockID = Buffer.from("block" + (i+"").padStart(6,'0')).toString("base64");
      blockBlobClient.stageBlock(blockID, blob, contentLength, <options : {abortSignal}>)
      blockBlobClient.commitBlockList(blockIDList);
```
