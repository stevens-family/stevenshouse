import { PageLayout } from '../components/PageLayout';
import { Image, ExternalLink, FolderOpen } from 'lucide-react';

const PhotosPage = () => {
  const drivePhotosUrl = "https://drive.google.com/drive/folders/YOUR_PHOTOS_FOLDER_ID";

  return (
    <PageLayout title="Family Photos">
      <div className="space-y-6" data-testid="photos-page">
        {/* Hero Card */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-sm"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur">
                <Image size={24} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl">Family Memories</h2>
                <p className="text-sm text-white/80">Captured moments together</p>
              </div>
            </div>
            
            <a
              href={drivePhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="photos-drive-link"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-text-primary rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
            >
              <FolderOpen size={18} />
              Open Photo Album
            </a>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
            data-testid="photos-recent-link"
          >
            <div className="p-3 rounded-2xl bg-primary/20 w-fit mb-3">
              <Image className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
              Recent Photos
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              View latest uploads
            </p>
          </a>

          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
            data-testid="photos-albums-link"
          >
            <div className="p-3 rounded-2xl bg-secondary/20 w-fit mb-3">
              <FolderOpen className="text-secondary" size={24} />
            </div>
            <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
              Albums
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Browse by event
            </p>
          </a>
        </div>

        {/* Info */}
        <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-6">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            About Our Photos
          </h3>
          <p className="text-sm text-text-secondary dark:text-dark-secondary">
            All family photos are stored securely in Google Drive. 
            Click "Open Photo Album" to view, download, or share our memories.
            Make sure you're signed into your Google account to access the photos.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PhotosPage;
