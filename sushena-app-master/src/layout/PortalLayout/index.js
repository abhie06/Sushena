// Components
import Footer from "layout/Footer";
import AppTopNav from "layout/Navigation/AppTopNav";

/**
 * Wrapping the App for logged in state
 */
export default function PortalLayout({ children }) {
  return (
    <>
      <div>
        <div className="flex flex-col flex-1">
          {/* Top bar  */}
          <AppTopNav />
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
