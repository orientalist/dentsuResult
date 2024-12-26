# Survey Profile Analyzer

## 簡介
Survey Profile Analyzer 是一個基於 Node.js 的應用程式，利用 OpenAI 的 API 來分析調查數據，並將受訪者的個人特徵分為“起源”和“分析”兩個類別。該應用程序通過推測和人類行為理解來生成受訪者屬性的洞見，並以 JSON 格式返回。

## 功能
- 接受調查結果並將其以 JSON 格式分析。
- 根據模擬的用戶調查數據，自動推測受訪者的屬性。
- 將數據分為“起源”和“分析”類別。
- 返回的數據格式符合特定 JSON 結構。

## 安裝與使用方式
1. 確保您的開發環境中已安裝 Node.js。
2. 從 GitHub 專案頁面克隆此專案：
   ```bash
   git clone https://github.com/<username>/Survey-Profile-Analyzer.git
   cd Survey-Profile-Analyzer
   ```
3. 安裝必要的依賴模組：
   ```bash
   npm install
   ```
4. 使用您自己的 OpenAI API 密鑰替換 `API_KEY` 變量。
5. 啟動應用並傳入調查結果作為參數進行分析：
   ```javascript
   const event = {
       body: JSON.stringify({ surveyResult: "您的調查結果" })
   };
   
   handler(event).then(response => {
       console.log(response);
   });
   ```

## 必要的依賴模組清單
- `openai`：用於與 OpenAI API 進行互動。

## 授權條款
本專案遵循 MIT 授權條款。詳情請參閱 LICENSE 檔案。

---

如果您對此專案有任何疑問或建議，請隨時提出問題。希望這個工具能對您的調查數據分析工作有所幫助！