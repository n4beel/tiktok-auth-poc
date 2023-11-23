import "./App.css";

function App() {
  const handleTikTokLogin = () => {
    const tikTokAuthUrl = `https://www.tiktok.com/v2/auth/authorize?client_key=${process.env.REACT_APP_CLIENT_KEY}&scope=user.info.basic,video.list&response_type=code&redirect_uri=https%3A%2F%2Ftiktok-auth-poc.web.app%2F&state=fngwwh5076e`;
    window.location.href = tikTokAuthUrl;
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleTikTokLogin}>Login with tiktok</button>
      </header>
    </div>
  );
}

export default App;
