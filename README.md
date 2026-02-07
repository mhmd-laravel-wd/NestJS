<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #e2e8f0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .container {
            max-width: 800px;
            width: 100%;
            text-align: center;
        }
        
        .logo-container {
            margin-bottom: 2rem;
        }
        
        .nest-logo {
            width: 150px;
            height: 150px;
            filter: drop-shadow(0 0 20px rgba(226, 232, 240, 0.3));
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .name-container {
            margin: 2rem 0;
            padding: 2rem;
            background: rgba(30, 41, 59, 0.7);
            border-radius: 20px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .title {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #94a3b8;
            margin-bottom: 0.5rem;
        }
        
        .name {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 5px 15px rgba(96, 165, 250, 0.2);
            line-height: 1.2;
            margin: 1rem 0;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #cbd5e1;
            margin-top: 1rem;
            opacity: 0.9;
        }
        
        .divider {
            height: 3px;
            width: 100px;
            background: linear-gradient(90deg, transparent, #60a5fa, #a78bfa, #f472b6, transparent);
            margin: 2rem auto;
            border-radius: 3px;
        }
        
        .footer {
            margin-top: 3rem;
            font-size: 0.9rem;
            color: #94a3b8;
            padding: 1rem;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
            width: 100%;
        }
        
        @media (max-width: 768px) {
            .name {
                font-size: 2.5rem;
            }
            
            .container {
                padding: 1rem;
            }
            
            .name-container {
                padding: 1.5rem;
            }
        }
        
        .glow {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
            filter: blur(40px);
            z-index: -1;
            animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
        }
    </style>
</head>
<body>
    <div class="glow" style="top: 10%; left: 10%;"></div>
    <div class="glow" style="bottom: 10%; right: 10%; background: radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%);"></div>
    
    <div class="container">
        <div class="logo-container">
            <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS Logo" class="nest-logo">
        </div>
        
        <div class="name-container">
            <div class="title">Professional Profile</div>
            <div class="name">Muhamed Khyr Hidar Awad</div>
            <div class="divider"></div>
            <div class="subtitle">Senior Software Engineer & Laravel Full-Stack & NestJS Specialist</div>
        </div>
        
        <div class="footer">
            Built with NestJS • Modern, Scalable Backend Solutions
        </div>
    </div>
</body>
</html>
