export default function App() {
  return (
    <main>
      <h1>Test Page</h1>
      <p>If you see this, the app is working</p>
    </main>
  );
}
// Handle Cognito authorization code
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  
  if (code) {
    console.log("✅ Received Cognito authorization code:", code);
    // Clean up the URL so the code doesn't show in the address bar
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Here you can exchange the code for tokens or mark user as authenticated
    // For now, just log it to confirm it's working
  }
}, []);
