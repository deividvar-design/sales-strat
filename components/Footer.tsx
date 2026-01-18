import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <Link to="/" className="flex items-center gap-2 group mb-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Sales House</span>
          </Link>
          <p className="text-sm text-slate-600 max-w-xs mb-3">Build your outbound engine. Simpler than you think. No agencies needed.</p>
          <a href="mailto:david@saleshousestack.com" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4" />
            david@saleshousestack.com
          </a>
          <a href="https://www.linkedin.com/in/davidvaran/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/library" className="hover:text-indigo-600 transition-colors">Tool Library</Link></li>
            <li><Link to="/strategies" className="hover:text-indigo-600 transition-colors">Playbook</Link></li>
            <li><Link to="/reviews" className="hover:text-indigo-600 transition-colors">Tool Reviews</Link></li>
            <li><Link to="/comparisons" className="hover:text-indigo-600 transition-colors">Tool Comparisons</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/consulting" className="hover:text-indigo-600 transition-colors">Consulting</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-600 transition-colors">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2026 Sales House by David Varan. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
