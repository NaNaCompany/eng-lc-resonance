export const tool = {
  "id": "E024",
  "title": "LC 공진주파수 계산기",
  "inputs_text": "인덕턴스 L [H], 정전용량 C [F]",
  "formula": "f₀ = 1 / (2π √(L C))",
  "output_text": "이상 LC 공진주파수 f₀ [Hz]",
  "assumptions": "L,C>0. 이상 LC 또는 직렬 RLC의 전류 공진 조건이다. 감쇠 고유주파수·병렬 회로의 실제 공진·기생성분을 포함한 예측과 구분한다.",
  "purpose": "LC 공진주파수 계산 / 필터·공진 실험 초기 설계",
  "sources": [
    {
      "label": "OpenStax · Resonance in an AC Circuit",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit"
    }
  ],
  "slug": "eng-lc-resonance",
  "category": "전기",
  "result_label": "이상 LC 공진주파수 f₀",
  "result_dimension": "frequency",
  "fields": [
    {
      "key": "l",
      "label": "인덕턴스 L",
      "dimension": "inductance",
      "example": 0.01,
      "constraint": "positive",
      "display_unit": "mH",
      "display_value": "10"
    },
    {
      "key": "c",
      "label": "정전용량 C",
      "dimension": "capacitance",
      "example": 1e-06,
      "constraint": "positive",
      "display_unit": "uF",
      "display_value": "1"
    }
  ],
  "site": "https://nanalab.kr/eng-lc-resonance/",
  "repository": "https://github.com/NaNaCompany/eng-lc-resonance",
  "condition": "",
  "output_unit": "Hz"
};
