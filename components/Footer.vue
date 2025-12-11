import { SvgIcon } from '../.nuxt/components';
<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__collaboration">
          <div class="footer__collaboration-desc">Is there a project?</div>
          <div class="footer__collaboration-title">Let’s work together</div>
        </div>

        <div class="footer__contact-info">
          <div class="footer__contact-item">
            <h3>For all questions</h3>
            <div class="footer__contact-details">
              <p>+7 (920) 278—00—68</p>
              <p>qtim@agency.com</p>
            </div>
          </div>

          <div class="footer__office-info">
            <h3>Office in Russia</h3>
            <div class="footer__office-details">
              <p>139 Ruben Station Lake Drew, NM 52678</p>
              <div class="footer__location-button">
                <div class="footer__location-icon">
                  <SvgIcon name="arrow-diagonal-top-left" />
                </div>
              </div>
            </div>
          </div>

          <div class="footer__office-info">
            <h3>Office in Dubai</h3>
            <div class="footer__office-details">
              <p>139 Ruben Station Lake Drew, NM 52678</p>
              <div class="footer__location-button">
                <div class="footer__location-icon">
                  <SvgIcon name="arrow-diagonal-top-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__social-links">
        <div class="footer__social-group">
          <div class="footer__social-item">
            <a href="#">Facebook</a>
            <div class="footer__social-divider"></div>
          </div>
          <div class="footer__social-item">
            <a href="#">Instagram</a>
            <div class="footer__social-divider"></div>
          </div>
          <div class="footer__social-item">
            <a href="#">Telegram</a>
            <div class="footer__social-divider"></div>
          </div>
        </div>

        <div class="footer__social-group">
          <div class="footer__social-item">
            <a href="#">Behance</a>
          </div>
          <div class="footer__social-item">
            <a href="#">Linkedn</a>
          </div>
          <div class="footer__social-item">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>

    <button class="footer__button">
      <span class="footer__button-text"> Go </span>
    </button>
  </footer>
</template>

<script setup lang="ts"></script>
