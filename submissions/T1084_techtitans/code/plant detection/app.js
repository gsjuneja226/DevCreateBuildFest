// Plant Disease Detection System JavaScript

class PlantDiseaseDetector {
    constructor() {
        this.analysisHistory = [];
        this.currentImage = null;
        this.plantDatabase = {
            "tomato": {
                "diseases": [
                    {
                        "name": "Early Blight",
                        "symptoms": "Dark spots with concentric rings on older leaves, yellowing and wilting",
                        "treatment": "Apply fungicide, improve air circulation, remove affected leaves",
                        "prevention": "Avoid overhead watering, plant resistant varieties, crop rotation"
                    },
                    {
                        "name": "Late Blight",
                        "symptoms": "Water-soaked lesions on leaves, white fuzzy growth on undersides",
                        "treatment": "Apply copper-based fungicide immediately, remove affected plants",
                        "prevention": "Avoid wet conditions, space plants properly, use resistant varieties"
                    },
                    {
                        "name": "Bacterial Spot",
                        "symptoms": "Small dark spots with yellow halos on leaves and fruits",
                        "treatment": "Apply copper sprays, remove affected plant parts",
                        "prevention": "Use certified seeds, avoid overhead irrigation, practice crop rotation"
                    },
                    {
                        "name": "Leaf Mold",
                        "symptoms": "Yellow spots on upper leaf surface, fuzzy growth underneath",
                        "treatment": "Improve ventilation, apply fungicide, remove lower leaves",
                        "prevention": "Control humidity, space plants adequately, use resistant varieties"
                    },
                    {
                        "name": "Healthy",
                        "symptoms": "Vibrant green leaves, no spots or discoloration",
                        "treatment": "Continue current care practices",
                        "prevention": "Maintain good growing conditions, regular monitoring"
                    }
                ]
            },
            "potato": {
                "diseases": [
                    {
                        "name": "Early Blight",
                        "symptoms": "Brown spots with target-like rings, yellowing leaves",
                        "treatment": "Apply fungicide, remove affected foliage",
                        "prevention": "Crop rotation, avoid overhead watering, use certified seed"
                    },
                    {
                        "name": "Late Blight",
                        "symptoms": "Dark water-soaked lesions, white mold on leaf undersides",
                        "treatment": "Apply preventive fungicides, destroy affected plants",
                        "prevention": "Plant resistant varieties, avoid wet conditions"
                    },
                    {
                        "name": "Healthy",
                        "symptoms": "Green healthy foliage, no discoloration",
                        "treatment": "Maintain current practices",
                        "prevention": "Regular monitoring, proper nutrition"
                    }
                ]
            },
            "apple": {
                "diseases": [
                    {
                        "name": "Apple Scab",
                        "symptoms": "Olive-green to black spots on leaves and fruits",
                        "treatment": "Apply fungicide sprays, rake fallen leaves",
                        "prevention": "Plant resistant varieties, improve air circulation"
                    },
                    {
                        "name": "Fire Blight",
                        "symptoms": "Blackened shoots that look burned, oozing cankers",
                        "treatment": "Prune affected branches, apply bactericide",
                        "prevention": "Avoid high-nitrogen fertilizers, prune during dry weather"
                    },
                    {
                        "name": "Healthy",
                        "symptoms": "Green leaves, no spots or burning",
                        "treatment": "Continue current care",
                        "prevention": "Regular pruning, good air circulation"
                    }
                ]
            },
            "general": {
                "diseases": [
                    {
                        "name": "Powdery Mildew",
                        "symptoms": "White powdery coating on leaves and stems",
                        "treatment": "Apply fungicide, improve air circulation",
                        "prevention": "Avoid overhead watering, space plants properly"
                    },
                    {
                        "name": "Anthracnose",
                        "symptoms": "Dark sunken lesions on leaves, stems, and fruits",
                        "treatment": "Apply copper fungicide, remove affected plant parts",
                        "prevention": "Ensure good drainage, avoid wet conditions"
                    }
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupDragAndDrop();
        this.setupTabSwitching();
    }

    setupEventListeners() {
        // File input handling
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        }

        // Choose file button - separate from upload area
        const chooseFileBtn = document.querySelector('.btn--primary');
        if (chooseFileBtn && chooseFileBtn.textContent.trim() === 'Choose File') {
            chooseFileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                document.getElementById('fileInput').click();
            });
        }

        // Camera button
        const cameraBtn = document.getElementById('cameraBtn');
        if (cameraBtn) {
            cameraBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.simulateCamera();
            });
        }

        // Clear button
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearImage());
        }

        // Analyze button
        const analyzeBtn = document.getElementById('analyzeBtn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => this.analyzeImage());
        }

        // New analysis button
        const newAnalysisBtn = document.getElementById('newAnalysisBtn');
        if (newAnalysisBtn) {
            newAnalysisBtn.addEventListener('click', () => this.startNewAnalysis());
        }

        // History button
        const viewHistoryBtn = document.getElementById('viewHistoryBtn');
        if (viewHistoryBtn) {
            viewHistoryBtn.addEventListener('click', () => this.showHistory());
        }

        // Modal close
        const closeHistoryModal = document.getElementById('closeHistoryModal');
        if (closeHistoryModal) {
            closeHistoryModal.addEventListener('click', () => this.closeModal());
        }

        // Export and print buttons
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportResults());
        }

        const printBtn = document.getElementById('printBtn');
        if (printBtn) {
            printBtn.addEventListener('click', () => this.printResults());
        }

        // Modal background click to close
        const historyModal = document.getElementById('historyModal');
        if (historyModal) {
            historyModal.addEventListener('click', (e) => {
                if (e.target === historyModal) {
                    this.closeModal();
                }
            });
        }
    }

    setupDragAndDrop() {
        const uploadArea = document.getElementById('uploadArea');
        if (!uploadArea) return;

        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, this.preventDefaults, false);
            document.body.addEventListener(eventName, this.preventDefaults, false);
        });

        // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => this.highlight(uploadArea), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => this.unhighlight(uploadArea), false);
        });

        // Handle dropped files
        uploadArea.addEventListener('drop', (e) => this.handleDrop(e), false);

        // Click to browse (only on the upload content area, not buttons)
        const uploadContent = uploadArea.querySelector('.upload-content');
        if (uploadContent) {
            uploadContent.addEventListener('click', (e) => {
                // Don't trigger if clicking on buttons
                if (!e.target.closest('button')) {
                    document.getElementById('fileInput').click();
                }
            });
        }
    }

    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    highlight(element) {
        element.classList.add('dragover');
    }

    unhighlight(element) {
        element.classList.remove('dragover');
    }

    handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            this.handleFile(files[0]);
        }
    }

    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetTab = e.target.dataset.tab;
                this.switchTab(targetTab);
            });
        });
    }

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            this.handleFile(file);
        }
    }

    handleFile(file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file (JPG, PNG, GIF).');
            return;
        }

        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB.');
            return;
        }

        this.currentImage = file;
        this.showImagePreview(file);
    }

    showImagePreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const previewImg = document.getElementById('previewImg');
            const imageInfo = document.getElementById('imageInfo');
            const imagePreviewContainer = document.getElementById('imagePreviewContainer');

            if (previewImg && imageInfo && imagePreviewContainer) {
                previewImg.src = e.target.result;
                
                const fileSizeKB = (file.size / 1024).toFixed(1);
                imageInfo.innerHTML = `
                    <strong>File:</strong> ${file.name}<br>
                    <strong>Size:</strong> ${fileSizeKB} KB<br>
                    <strong>Type:</strong> ${file.type}
                `;

                imagePreviewContainer.classList.remove('hidden');
                imagePreviewContainer.classList.add('fade-in');
                
                // Scroll to preview
                imagePreviewContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };
        reader.readAsDataURL(file);
    }

    simulateCamera() {
        // For demo purposes, create a simple placeholder image
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        // Create a simple plant-like image
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#2E7D32';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('📸 Camera Captured Plant Image', canvas.width/2, canvas.height/2 - 20);
        ctx.fillText('(Demo Image)', canvas.width/2, canvas.height/2 + 20);
        
        // Convert canvas to blob
        canvas.toBlob((blob) => {
            // Create a File object from the blob
            const file = new File([blob], 'camera-capture.png', { type: 'image/png' });
            this.currentImage = file;
            this.showImagePreview(file);
        }, 'image/png');
    }

    clearImage() {
        this.currentImage = null;
        const imagePreviewContainer = document.getElementById('imagePreviewContainer');
        const fileInput = document.getElementById('fileInput');
        
        if (imagePreviewContainer) {
            imagePreviewContainer.classList.add('hidden');
        }
        if (fileInput) {
            fileInput.value = '';
        }
        
        this.hideResults();
    }

    async analyzeImage() {
        if (!this.currentImage) {
            alert('Please upload an image first.');
            return;
        }

        this.showAnalysisLoading();
        
        // Simulate analysis steps
        await this.simulateAnalysisSteps();
        
        // Perform image analysis
        const analysisResult = await this.performImageAnalysis();
        
        // Show results
        this.showResults(analysisResult);
        
        // Add to history
        this.addToHistory(analysisResult);
    }

    showAnalysisLoading() {
        const analysisSection = document.getElementById('analysisSection');
        if (analysisSection) {
            analysisSection.classList.remove('hidden');
            analysisSection.classList.add('fade-in');
            analysisSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        this.hideResults();
    }

    async simulateAnalysisSteps() {
        const steps = document.querySelectorAll('.step');
        
        for (let i = 0; i < steps.length; i++) {
            // Remove active class from all steps
            steps.forEach(step => step.classList.remove('active'));
            
            // Add active class to current step
            steps[i].classList.add('active');
            
            // Wait for a realistic amount of time
            await new Promise(resolve => setTimeout(resolve, 800));
        }
    }

    async performImageAnalysis() {
        // Simulate image processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Determine plant type based on filename or random selection
        const plantType = this.determinePlantType();
        
        // Get diseases for this plant type
        const availableDiseases = this.plantDatabase[plantType].diseases;
        
        // Simulate disease detection based on image analysis
        const detectedDisease = this.detectDisease(availableDiseases);
        
        // Generate confidence score
        const confidence = this.generateConfidence(detectedDisease.name);

        return {
            plantType: this.formatPlantType(plantType),
            disease: detectedDisease,
            confidence: confidence,
            timestamp: new Date(),
            filename: this.currentImage.name
        };
    }

    determinePlantType() {
        const filename = this.currentImage.name.toLowerCase();
        
        // Check filename for plant type hints
        if (filename.includes('tomato')) return 'tomato';
        if (filename.includes('potato')) return 'potato';
        if (filename.includes('apple')) return 'apple';
        
        // Random selection from available plant types
        const plantTypes = Object.keys(this.plantDatabase).filter(type => type !== 'general');
        return plantTypes[Math.floor(Math.random() * plantTypes.length)];
    }

    detectDisease(availableDiseases) {
        const filename = this.currentImage.name.toLowerCase();
        
        // Check filename for disease hints
        if (filename.includes('healthy') || filename.includes('normal')) {
            return availableDiseases.find(d => d.name === 'Healthy') || availableDiseases[availableDiseases.length - 1];
        }
        
        if (filename.includes('blight')) {
            const blightDisease = availableDiseases.find(d => d.name.includes('Blight'));
            if (blightDisease) return blightDisease;
        }
        
        if (filename.includes('spot')) {
            const spotDisease = availableDiseases.find(d => d.name.includes('Spot'));
            if (spotDisease) return spotDisease;
        }
        
        // Simulate disease detection based on "image analysis"
        const healthyProbability = 0.3; // 30% chance of healthy plant
        
        if (Math.random() < healthyProbability) {
            return availableDiseases.find(d => d.name === 'Healthy') || availableDiseases[availableDiseases.length - 1];
        } else {
            // Select a disease (excluding healthy)
            const diseases = availableDiseases.filter(d => d.name !== 'Healthy');
            return diseases[Math.floor(Math.random() * diseases.length)];
        }
    }

    generateConfidence(diseaseName) {
        if (diseaseName === 'Healthy') {
            return Math.floor(Math.random() * (98 - 85 + 1)) + 85; // 85-98%
        } else {
            return Math.floor(Math.random() * (95 - 75 + 1)) + 75; // 75-95%
        }
    }

    formatPlantType(plantType) {
        return plantType.charAt(0).toUpperCase() + plantType.slice(1);
    }

    showResults(result) {
        const analysisSection = document.getElementById('analysisSection');
        if (analysisSection) {
            analysisSection.classList.add('hidden');
        }
        
        const resultsSection = document.getElementById('resultsSection');
        const resultCard = document.querySelector('.result-card');
        
        if (!resultsSection || !resultCard) return;
        
        // Update result status
        const isHealthy = result.disease.name === 'Healthy';
        
        if (isHealthy) {
            resultCard.classList.add('healthy');
            resultCard.classList.remove('disease');
            const statusIcon = document.getElementById('statusIcon');
            const statusText = document.getElementById('statusText');
            if (statusIcon) statusIcon.textContent = '✅';
            if (statusText) statusText.textContent = 'Healthy Plant';
        } else {
            resultCard.classList.add('disease');
            resultCard.classList.remove('healthy');
            const statusIcon = document.getElementById('statusIcon');
            const statusText = document.getElementById('statusText');
            if (statusIcon) statusIcon.textContent = '⚠️';
            if (statusText) statusText.textContent = 'Disease Detected';
        }
        
        // Update content
        const plantTypeEl = document.getElementById('plantType');
        const diseaseNameEl = document.getElementById('diseaseName');
        const confidenceScoreEl = document.getElementById('confidenceScore');
        const symptomsEl = document.getElementById('symptoms');
        const treatmentContentEl = document.getElementById('treatmentContent');
        const preventionContentEl = document.getElementById('preventionContent');
        
        if (plantTypeEl) plantTypeEl.textContent = `Plant Type: ${result.plantType}`;
        if (diseaseNameEl) diseaseNameEl.textContent = result.disease.name;
        if (confidenceScoreEl) confidenceScoreEl.textContent = `${result.confidence}%`;
        if (symptomsEl) symptomsEl.textContent = result.disease.symptoms;
        if (treatmentContentEl) treatmentContentEl.textContent = result.disease.treatment;
        if (preventionContentEl) preventionContentEl.textContent = result.disease.prevention;
        
        // Update urgency indicator
        const urgencyIndicator = document.getElementById('urgencyIndicator');
        if (urgencyIndicator) {
            if (isHealthy) {
                urgencyIndicator.innerHTML = `
                    <span class="urgency-level">✅ No Action Needed</span>
                    <p>Continue monitoring plant health</p>
                `;
            } else {
                const urgency = result.confidence > 85 ? 'High' : 'Moderate';
                const timeframe = result.confidence > 85 ? '1-2 days' : '3-5 days';
                urgencyIndicator.innerHTML = `
                    <span class="urgency-level">⚠️ ${urgency} Urgency</span>
                    <p>Begin treatment within ${timeframe}</p>
                `;
            }
        }
        
        // Update additional info
        this.updateAdditionalInfo(result.disease.name, isHealthy);
        
        resultsSection.classList.remove('hidden');
        resultsSection.classList.add('fade-in');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    updateAdditionalInfo(diseaseName, isHealthy) {
        const aboutTab = document.getElementById('aboutTab');
        const spreadTab = document.getElementById('spreadTab');
        
        if (aboutTab) {
            if (isHealthy) {
                aboutTab.innerHTML = '<p>Your plant appears to be healthy! Continue providing proper care and monitoring for any changes.</p>';
            } else {
                aboutTab.innerHTML = `<p>${diseaseName} is a plant disease that requires prompt attention. Early detection and treatment are key to preventing spread and plant damage.</p>`;
            }
        }
        
        if (spreadTab) {
            if (isHealthy) {
                spreadTab.innerHTML = '<p>Maintain good plant hygiene and growing conditions to prevent disease development.</p>';
            } else {
                spreadTab.innerHTML = '<p>This disease typically spreads through environmental factors such as moisture, air circulation, and plant-to-plant contact. Proper sanitation and treatment can help control its spread.</p>';
            }
        }
    }

    hideResults() {
        const resultsSection = document.getElementById('resultsSection');
        const analysisSection = document.getElementById('analysisSection');
        
        if (resultsSection) resultsSection.classList.add('hidden');
        if (analysisSection) analysisSection.classList.add('hidden');
    }

    addToHistory(result) {
        this.analysisHistory.unshift({
            id: Date.now(),
            ...result
        });
        
        // Keep only last 10 analyses
        if (this.analysisHistory.length > 10) {
            this.analysisHistory = this.analysisHistory.slice(0, 10);
        }
    }

    startNewAnalysis() {
        this.clearImage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showHistory() {
        const historyList = document.getElementById('historyList');
        const modal = document.getElementById('historyModal');
        
        if (!historyList || !modal) return;
        
        if (this.analysisHistory.length === 0) {
            historyList.innerHTML = '<p>No analysis history available.</p>';
        } else {
            historyList.innerHTML = this.analysisHistory.map(item => `
                <div class="history-item">
                    <h4>${item.plantType} - ${item.disease.name}</h4>
                    <p><strong>Confidence:</strong> ${item.confidence}%</p>
                    <p><strong>Date:</strong> ${item.timestamp.toLocaleDateString()} ${item.timestamp.toLocaleTimeString()}</p>
                    <p><strong>File:</strong> ${item.filename}</p>
                </div>
            `).join('');
        }
        
        modal.classList.remove('hidden');
    }

    closeModal() {
        const modal = document.getElementById('historyModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    switchTab(targetTab) {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        const targetBtn = document.querySelector(`[data-tab="${targetTab}"]`);
        const targetPane = document.getElementById(`${targetTab}Tab`);
        
        if (targetBtn) targetBtn.classList.add('active');
        if (targetPane) targetPane.classList.add('active');
    }

    exportResults() {
        if (this.analysisHistory.length === 0) {
            alert('No analysis results to export.');
            return;
        }
        
        const latestResult = this.analysisHistory[0];
        const reportContent = `
PLANT DISEASE ANALYSIS REPORT
=============================

Analysis Date: ${latestResult.timestamp.toLocaleDateString()} ${latestResult.timestamp.toLocaleTimeString()}
Image File: ${latestResult.filename}

RESULTS:
--------
Plant Type: ${latestResult.plantType}
Condition: ${latestResult.disease.name}
Confidence Level: ${latestResult.confidence}%

SYMPTOMS IDENTIFIED:
${latestResult.disease.symptoms}

TREATMENT RECOMMENDATIONS:
${latestResult.disease.treatment}

PREVENTION MEASURES:
${latestResult.disease.prevention}

NOTE: This analysis is for educational purposes. Please consult with agricultural experts for professional diagnosis and treatment advice.
        `;
        
        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `plant-analysis-report-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    printResults() {
        if (this.analysisHistory.length === 0) {
            alert('No analysis results to print.');
            return;
        }
        
        const printWindow = window.open('', '_blank');
        const latestResult = this.analysisHistory[0];
        
        const printContent = `
            <html>
                <head>
                    <title>Plant Disease Analysis Report</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 40px; }
                        .header { text-align: center; margin-bottom: 30px; }
                        .section { margin-bottom: 20px; }
                        .section h3 { color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 5px; }
                        .result-box { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0; }
                        .confidence { font-size: 24px; font-weight: bold; color: ${latestResult.disease.name === 'Healthy' ? '#2d5a4a' : '#c53030'}; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>Plant Disease Analysis Report</h1>
                        <p>Generated on ${latestResult.timestamp.toLocaleDateString()} at ${latestResult.timestamp.toLocaleTimeString()}</p>
                    </div>
                    
                    <div class="section">
                        <h3>Analysis Results</h3>
                        <div class="result-box">
                            <p><strong>Plant Type:</strong> ${latestResult.plantType}</p>
                            <p><strong>Condition:</strong> ${latestResult.disease.name}</p>
                            <p><strong>Confidence Level:</strong> <span class="confidence">${latestResult.confidence}%</span></p>
                            <p><strong>Image File:</strong> ${latestResult.filename}</p>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h3>Symptoms Identified</h3>
                        <p>${latestResult.disease.symptoms}</p>
                    </div>
                    
                    <div class="section">
                        <h3>Treatment Recommendations</h3>
                        <p>${latestResult.disease.treatment}</p>
                    </div>
                    
                    <div class="section">
                        <h3>Prevention Measures</h3>
                        <p>${latestResult.disease.prevention}</p>
                    </div>
                    
                    <div class="section">
                        <h3>Important Note</h3>
                        <p><em>This analysis is for educational and research purposes. Please consult with qualified agricultural experts for professional diagnosis and treatment advice.</em></p>
                    </div>
                </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PlantDiseaseDetector();
});