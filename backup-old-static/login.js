import React, { useState, useEffect } from 'react';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// --- SUPABASE SETUP ---
// IMPORTANT: Replace with your actual Supabase Project URL and Anon Key
const supabaseUrl = 'https://mrarxxudjfnmcfqhnjlm.supabase.co'; // Found in Project Settings > API
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yYXJ4eHVkamZubWNmcWhuamxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MTUxMDQsImV4cCI6MjA3NTM5MTEwNH0.mxQVU_Wsd_0_v604RCQMNimxJKFRMjVmazKXn_x5Qlw'; // Found in Project Settings > API
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- SVG ICONS ---
const Icon = ({ name, className }) => {
  const icons = {
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></>,
  };
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{icons[name] || <circle cx="12" cy="12" r="10" />}</svg>;
};

// --- AUTH PAGE (Login & Signup) ---
const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', content: '' });

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', content: '' });

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: { data: { name: name } }
                });
                if (error) throw error;
                setMessage({ type: 'success', content: 'Success! Please check your email for a confirmation link.' });
            }
        } catch (error) {
            setMessage({ type: 'error', content: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">TalentSphere</h1>
                    <p className="mt-2 text-gray-600">{isLogin ? 'Welcome back, User!' : 'Create your account'}</p>
                </div>

                {message.content && (
                    <div className={`p-3 text-sm rounded-lg ${message.type === 'error' ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'}`}>
                        {message.content}
                    </div>
                )}
                
                <form className="mt-8 space-y-6" onSubmit={handleAuth}>
                    <div className="space-y-4 rounded-md">
                        {!isLogin && (
                            <div>
                                <input name="name" type="text" required className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        )}
                        <div>
                            <input name="email" type="email" autoComplete="email" required className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input name="password" type="password" autoComplete="current-password" required className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={loading} className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 disabled:bg-indigo-400">
                            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                        </button>
                    </div>
                </form>

                <p className="mt-2 text-sm text-center text-gray-600">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <button onClick={() => { setIsLogin(!isLogin); setMessage({type: '', content: ''}); }} className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </div>
    );
};

// A simple page to show after successful login
const LoggedInPage = ({ session }) => {
    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
            <div className="p-8 text-center bg-white rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800">Login Successful!</h1>
                <p className="mt-2 text-gray-600">Welcome, {session.user.email}</p>
                <button onClick={handleLogout} className="flex items-center justify-center w-full px-4 py-3 mt-6 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    <Icon name="logout" className="w-5 h-5 mr-2" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---
export default function App() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setLoading(false);
        };

        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession);
        });
        
        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return (
        <>
            {session ? <LoggedInPage session={session} /> : <AuthPage />}
        </>
    );
}

