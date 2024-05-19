import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalElement: HTMLElement | null = null;

  open(id: string) {
    this.modalElement = document.getElementById(id);
    if (this.modalElement) {
      this.modalElement.style.display = 'block';
    }
  }

  close(id: string) {
    this.modalElement = document.getElementById(id);
    if (this.modalElement) {
      this.modalElement.style.display = 'none';
    }
  }
}
