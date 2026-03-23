import { PageLayout } from '../components/PageLayout';
import { Image, ExternalLink, FolderOpen } from 'lucide-react';

const PhotosPage = () => {
  const drivePhotosUrl = "https://drive.google.com/drive/folders/YOUR_PHOTOS_FOLDER_ID";

  return (
    <PageLayout title="Family Moments">
      <div className="space-y-8" data-testid="photos-page">
        {/* Hero Card */}
        <div className="luxury-card p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center mx-auto mb-6">
            <Image className="text-gold" size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="font-heading font-bold text-primary text-2xl mb-2">
            Family Memories
          </h2>
          <p className="text-secondary mb-6 max-w-md mx-auto">
            Captured moments that tell our story. Access our shared photo collection.
          </p>
          
          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="photos-drive-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[var(--bg-primary)] rounded-lg font-bold hover:opacity-90 transition-luxury"
          >
            <FolderOpen size={18} />
            Open Photo Album
          </a>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card p-5"
            data-testid="photos-recent-link"
          >
            <div className="w-10 h-10 rounded-xl bg-gold-dim flex items-center justify-center mb-4">
              <Image className="text-gold" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Recent Photos
            </h3>
            <p className="text-secondary text-xs">
              View latest uploads
            </p>
          </a>

          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card p-5"
            data-testid="photos-albums-link"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <FolderOpen className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Albums
            </h3>
            <p className="text-secondary text-xs">
              Browse by event
            </p>
          </a>
        </div>

        {/* Info */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <p className="text-secondary text-sm">
            All family photos are stored securely in Google Drive. 
            Sign in with your Google account to access the full collection.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PhotosPage;
