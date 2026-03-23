import { PageLayout } from '../components/PageLayout';
import { Upload, CloudUpload, Camera, FolderUp } from 'lucide-react';

const UploadPage = () => {
  const uploadFolderUrl = "https://drive.google.com/drive/folders/YOUR_UPLOAD_FOLDER_ID";

  return (
    <PageLayout title="Upload Photos">
      <div className="space-y-6" data-testid="upload-page">
        {/* Main Upload Card */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 shadow-sm text-center">
          <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-4">
            <CloudUpload className="text-primary" size={40} />
          </div>
          
          <h2 className="font-heading font-bold text-xl text-text-primary dark:text-dark-primary mb-2">
            Share Your Photos
          </h2>
          <p className="text-sm text-text-secondary dark:text-dark-secondary mb-6 max-w-sm mx-auto">
            Add new photos to our family collection. Upload directly to our shared Google Drive folder.
          </p>
          
          <a
            href={uploadFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="upload-drive-link"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            <Upload size={20} />
            Open Upload Folder
          </a>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/20 dark:bg-secondary/30 rounded-3xl p-5">
            <div className="p-2 rounded-xl bg-secondary/30 w-fit mb-3">
              <Camera className="text-secondary" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              From Phone
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Upload photos directly from your camera roll
            </p>
          </div>

          <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-5">
            <div className="p-2 rounded-xl bg-accent/40 w-fit mb-3">
              <FolderUp className="text-accent" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Multiple Files
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Select multiple photos at once
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-4">
            How to Upload
          </h3>
          <ol className="text-sm text-text-secondary dark:text-dark-secondary space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">1</span>
              <span>Click "Open Upload Folder" above</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">2</span>
              <span>Sign in to Google if prompted</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">3</span>
              <span>Click the "+ New" button in Google Drive</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">4</span>
              <span>Select "File upload" and choose your photos</span>
            </li>
          </ol>
        </div>
      </div>
    </PageLayout>
  );
};

export default UploadPage;
